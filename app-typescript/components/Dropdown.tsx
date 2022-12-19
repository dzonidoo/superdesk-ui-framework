import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createPopper } from '@popperjs/core';
import { useId } from "react-id-generator";

export interface IMenuItem {
    label: string | React.ReactNode;
    icon?: string;
    active?: boolean;
    onSelect(): void;
}

interface IMenuItemRes extends IMenuItem {
    onChange?(event?: any): void;
}

export interface ISubmenu {
    type: 'submenu';
    label: string | React.ReactNode;
    icon?: string;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}

export interface IMenuGroup {
    type: 'group';
    label?: string | React.ReactNode;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}

interface IMenu {
    label?: string | React.ReactNode;
    align?: 'left' | 'right';
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    header?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    footer?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    append?: boolean;
    children: React.ReactNode;
    onChange?(event?: any): void;
}

const DROPDOWN_ID_CONTAINER = "sd-dropdown-constainer";

export const Dropdown = ({
    items,
    header,
    footer,
    children,
    append,
    align,
    onChange,
}: IMenu) => {
    const [open, setOpen] = React.useState(false);
    const [change, setChange] = React.useState(false);
    const [menuID] = useId();
    const ref = React.useRef(null);
    const buttonRef = React.useRef(null);
    const headerElements = header?.map((el, index) => {
        return each(el, index);
    });

    const dropdownElements = items.map((el, index) => {
        return each(el, index);
    });

    const footerElements = footer?.map((el, index) => {
        return each(el, index);
    });

    React.useEffect(() => {
        const existingElement = document.getElementById(DROPDOWN_ID_CONTAINER);
        if (!existingElement) {
            const el = document.createElement("div");
            el.id = DROPDOWN_ID_CONTAINER;
            el.style.position = 'absolute';
            el.style.top = '0';
            el.style.left = '0';
            el.style.width = '1px';
            el.style.height = '1px';

            document.body.appendChild(el);
        }
    }, [change]);

    React.useLayoutEffect(() => {
        if (append && change) {
            addInPlaceholder();
        }
        setChange(true);
    }, [open]);

    function createAppendMenu() {
        if (header && footer) {
            return (
                <div className='dropdown__menu dropdown__menu--has-head-foot' id={menuID} role='menu' ref={ref}>
                    <ul className='dropdown__menu-header'>
                        {headerElements}
                    </ul>
                    <ul className='dropdown__menu-body'>
                        {dropdownElements}
                    </ul>
                    <ul className='dropdown__menu-footer dropdown__menu-footer--has-list '>
                        {footerElements}
                    </ul>
                </div>
            );
        } else if (header) {
            return (
                <div className='dropdown__menu dropdown__menu--has-head-foot' id={menuID} role='menu' ref={ref}>
                    <ul className='dropdown__menu-header'>
                        {headerElements}
                    </ul>
                    <ul className='dropdown__menu-body'>
                        {dropdownElements}
                    </ul>
                </div>
            );
        } else if (footer) {
            return (
                <div className='dropdown__menu dropdown__menu--has-head-foot' id={menuID} role='menu' ref={ref}>
                    <ul className='dropdown__menu-body'>
                        {dropdownElements}
                    </ul>
                    <ul className='dropdown__menu-footer dropdown__menu-footer--has-list '>
                        {footerElements}
                    </ul>
                </div>
            );
        } else {
            return (
                <ul className='dropdown__menu ' id={menuID} role='menu' ref={ref}>
                    {dropdownElements}
                </ul>
            );
        }
    }

    function toggleDisplay() {
        if (!open) {
            let menuRef: any;
            setOpen(true);
            if (!append) {
                menuRef = ref.current;
                let toggleRef = buttonRef.current;
                if (toggleRef && menuRef) {
                    createPopper(toggleRef, menuRef, {
                        placement: checkAlign() ? 'bottom-end' : 'bottom-start',
                    });
                }
            } else {
                setTimeout(() => {
                    menuRef = ref.current;
                    let toggleRef = buttonRef.current;
                    if (toggleRef && menuRef) {
                        createPopper(toggleRef, menuRef, {
                            placement: checkAlign() ? 'bottom-end' : 'bottom-start',
                            strategy: 'fixed',
                        });
                        menuRef.style.display = 'block';
                    }
                }, 0);
            }

            document.addEventListener('click', closeMenu);
            setTimeout(() => {
                menuRef.getElementsByTagName('button')[0].focus();
                menuRef.addEventListener('keydown', (e: any) => keyboardNavigation(e, menuRef));
            });

        } else {
            setOpen(false);
        }
    }

    function closeMenu() {
        document.removeEventListener('click', closeMenu);
        document.removeEventListener('keydown', keyboardNavigation);
        setOpen(false);
    }

    function checkAlign() {
        if (align === 'right') {
            return true;
        } else {
            return false;
        }
    }

    function addInPlaceholder() {
        const placeholder = document.getElementById(DROPDOWN_ID_CONTAINER);
        let menu = createAppendMenu();
        if (open) {
            return ReactDOM.render(menu, placeholder);
        } else {
            if (placeholder) {
                ReactDOM.unmountComponentAtNode(placeholder);
            }
        }
    }

    function each(item: any, index: number) {
        if (item['type'] === 'submenu') {
            let submenuItems: any = [];
            item['items'].forEach((el: any, key: number) => {
                submenuItems.push(each(el, key));
            });
            return (
                <DropdownItemWithSubmenu
                key={index}
                index={index}
                item={item}
                menuID={menuID}
                subMenuItems={submenuItems}
                onChange={onChange} />
            );
        } else if (item['type'] === 'group') {
            let groupItems: any = [];
            item['items'].forEach((el: any, key: number) => {
                groupItems.push(each(el, key));
            });
            return (
                <React.Fragment key={index}>
                    <li>
                        <div className="dropdown__menu-label">{item['label']}</div>
                    </li>
                    {groupItems}
                </React.Fragment>
            );
        } else if (item === 'divider') {
            return (<li className="dropdown__menu-divider" key={index}></li>);
        } else {
            return (
                <DropdownItem
                key={index}
                label={item['label']}
                icon={item['icon']}
                active={item['active']}
                onSelect={item['onSelect']}
                onChange={onChange} />
            );
        }
    }

    return (
        <div className={'dropdown ' + (open ? 'open' : '')}>
            {typeof children === 'object' ?
                (React.isValidElement(children) ?
                    <div ref={buttonRef} style={{ display: 'content' }}>
                        {React.cloneElement(children, {
                            className: children.props.className ? (children.props.className + ' dropdown__toggle dropdown-toggle') : 'dropdown__toggle dropdown-toggle',
                            'aria-haspopup': "menu",
                            'aria-expanded': open,
                            onClick: toggleDisplay,
                            ref: buttonRef,
                        })}
                    </div> : null)
                :
                <button ref={buttonRef}
                className=' dropdown__toggle dropdown-toggle'
                aria-haspopup="menu"
                tabIndex={0}
                aria-expanded={open}
                onClick={toggleDisplay}>
                    {children}
                    <span className="dropdown__caret"></span>
                </button>}

            {append ?
                null : (function() {
                    if (header && footer) {
                        return (
                            <div className='dropdown__menu dropdown__menu--has-head-foot' role='menu' ref={ref}>
                                <ul className='dropdown__menu-header'>
                                    {headerElements}
                                </ul>
                                <ul className='dropdown__menu-body'>
                                    {dropdownElements}
                                </ul>
                                <ul className='dropdown__menu-footer dropdown__menu-footer--has-list '>
                                    {footerElements}
                                </ul>
                            </div>
                        );
                    } else if (header) {
                        return (
                            <div className='dropdown__menu dropdown__menu--has-head-foot' role='menu' ref={ref}>
                                <ul className='dropdown__menu-header'>
                                    {headerElements}
                                </ul>
                                <ul className='dropdown__menu-body'>
                                    {dropdownElements}
                                </ul>
                            </div>
                        );
                    } else if (footer) {
                        return (
                            <div className='dropdown__menu dropdown__menu--has-head-foot' role='menu' ref={ref}>
                                <ul className='dropdown__menu-body'>
                                    {dropdownElements}
                                </ul>
                                <ul className='dropdown__menu-footer dropdown__menu-footer--has-list '>
                                    {footerElements}
                                </ul>
                            </div>
                        );
                    } else {
                        return (
                            <ul className='dropdown__menu' role='menu' ref={ref}>
                                {dropdownElements}
                            </ul>
                        );
                    }
                })()}
        </div >
    );
};

const DropdownItem = ({
label,
icon,
active,
onSelect,
onChange,
}: IMenuItemRes) => {
    return (
        <li role='none' className={active ? 'dropdown__menu-item--active' : ''}>
            <button tabIndex={0}
            role='menuitem'
            onClick={() => {
                setTimeout(() => {
                    onSelect();
                });
                if (onChange) {
                    onChange();
                }
            }}>
                <i className={icon ? ('icon-' + icon) : ''}></i>
                {label}
            </button>
        </li>
    );
};

const DropdownItemWithSubmenu = ({
    index,
    item,
    menuID,
    subMenuItems,
    onChange,
}: IMenuItem | any) => {
    const [open, setOpen] = React.useState<undefined | boolean>(undefined);

    const refButtonSubMenu = React.useRef(null);
    const refSubMenu = React.useRef(null);
    const placeholder = document.getElementById(menuID);

    React.useEffect(() => {
        let subMenuRef: any = refSubMenu.current;
        let subToggleRef = refButtonSubMenu.current;

        if (open === true) {
            placeholder?.appendChild(subMenuRef);
            subMenuRef.style.display = 'block';
        } else if (open === false) {
            placeholder?.removeChild(subMenuRef);
            subMenuRef.style.display = 'none';
        }

        if (subMenuRef && subToggleRef) {
            createPopper(subToggleRef, subMenuRef, {
                placement: 'right-start',
            });
        }
        
        if (refButtonSubMenu.current) {
            refButtonSubMenu.current.addEventListener('keydown', (e: any) => {
                keyboardNavigation(e, subMenuRef, subToggleRef, placeholder, open, setOpen);
            });
            
        }
        if (open) {
            if ( subMenuRef.getElementsByTagName('button')[0]) {
                subMenuRef.getElementsByTagName('button')[0].focus();
            }
        }

        
    }, [open]);

    // React.useEffect(() => {
    //     let subMenuRef: any = refSubMenu.current;
    //     let subToggleRef = refButtonSubMenu.current;
        
    //     if (refButtonSubMenu.current) {
    //         refButtonSubMenu.current.addEventListener('keydown', (e: any) => {
    //             keyboardNavigation(e, subMenuRef, subToggleRef, placeholder, open, setOpen);
    //         });
            
    //     }
        
    // }, []);


    return (
        <li key={index} ref={refButtonSubMenu}>
            <div className='dropdown'
            onMouseLeave={() => setOpen(false)}>
                <button
                className='dropdown__toggle dropdown-toggle'
                aria-haspopup="menu"
                tabIndex={0}
                onClick={() => {
                    if (item.onSelect) {
                        setTimeout(() => {
                            item.onSelect();
                        });
                    }
                    if (onChange) {
                        onChange();
                    }
                }}
                onMouseOver={() => setOpen(true) }>
                    {item['icon'] ? <i className={'icon-' + item['icon']}></i> : null}
                    {item['label']}
                </button>
                <ul
                role='menu'
                ref={refSubMenu}
                style={{display: 'none'}}
                className='dropdown__menu'>
                    {subMenuItems}
                </ul>
            </div>
        </li>
    );
};

const getButtonList = (menuRef: any, open: any) => {

    //let list = menuRef.tagName === 'DIV' ? menuRef.querySelectorAll(':scope > ul > li') : menuRef.querySelectorAll(':scope > li');
    let list = [];
    if (open) {
        list = [];
    } else {
        list = menuRef.tagName === 'DIV' ? menuRef.querySelectorAll(':scope > ul > li') : menuRef.querySelectorAll(':scope > li');
    }

    let buttons: any = [];

    Array.from(list).filter((item: any) => {
        if (item.getElementsByTagName('button').length > 0) {
            buttons.push(item.getElementsByTagName('button')[0]);
        }
    });
    //console.log('getButtonList', list);

    console.log('getButtonLIst',Array.from(list));
    
    
    return buttons;
};

const menuRefs: any = [];
const backButton: any = [];

const keyboardNavigation = (e?: any, menuRef?: any, toggleRef?: any, placeholder?: any, open?: any, setOpen?: any) => {
    console.log('pokrece se');
    
    let buttons = getButtonList(menuRef, open);
    
    

    const currentElement = document.activeElement;
    const currentIndex = Array.prototype.indexOf.call(buttons, currentElement);

    if (buttons.includes(document.activeElement)) {
        if (e.keyCode === 40) {
            nextElement(buttons, currentIndex);
        } else if (e.keyCode === 38) {
            prevElement(buttons, currentIndex);
        }
    }

    //console.log(buttons);
    
    if (toggleRef) {
        if (e.keyCode === 39) {

            // buttons = getButtonList(menuRef, open);
            
            // backButton.push(document.activeElement);

            
                
            setOpen(true);
            //currentElement?.dispatchEvent(new Event('mouseover'));
            menuRef.style.display = 'block';
            menuRef.getElementsByTagName('button')[0].focus();

            

        }
        if (e.keyCode === 37) {
            //if (buttons.includes(document.activeElement)) {

                backButton.pop().focus();
                setOpen(false)
                
                //currentElement?.dispatchEvent(new Event('mouseleave'));
                //menuRef.style.display = 'none';
                //setOpen(false);
                
            //}
            
        }
        if (menuRef && toggleRef) {
            createPopper(toggleRef, menuRef, {
                placement: 'right-start',
            });
        }
    }
};

const nextElement = (buttons: any, currentIndex: number) => {
    if (buttons[currentIndex + 1]) {
        buttons[currentIndex + 1].focus();
    } else {
        buttons[0].focus();
    }
};

const prevElement = (buttons: any, currentIndex: number) => {
    if (buttons[currentIndex - 1]) {
        buttons[currentIndex - 1].focus();
    } else {
        buttons[buttons.length - 1].focus();
    }
};




const LeftAndRight = (e?: any, menuRef?: any, toggleRef?: any, placeholder?: any, open?: any, setOpen?: any) => {
    let buttons = getButtonList(menuRef);
    const currentElement = document.activeElement;
    //const currentIndex = Array.prototype.indexOf.call(buttons, currentElement);

        if (e.keyCode === 39) {
            buttons = [];
                setOpen(true);
                menuRefs.push(menuRef);
                console.log(menuRefs[menuRefs.length - 1], 'menuRefs');
                setTimeout(() => {
                    buttons = getButtonList(menuRefs[menuRefs.length - 1]);
                    menuRefs[menuRefs.length - 1].getElementsByTagName('button')[0].focus();
                }, 90);
        }
        if (e.keyCode === 37) {
            if (buttons.includes(document.activeElement)) {
                console.log(currentElement);
                currentElement?.dispatchEvent(new Event('mouseleave'));
                // menuRefs.pop().focus();
            }
        }
        if (menuRef && toggleRef) {
            createPopper(toggleRef, menuRef, {
                placement: 'right-start',
            });
        }
};
