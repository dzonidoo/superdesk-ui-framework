import * as React from 'react';
import classNames from 'classnames';
interface IProps {
    name: string;
    align?: 'left' | 'right';
    side?: 'left' | 'right';
    icon?: string;
    navDropdown?: boolean;
    level?: boolean;
    headerFooter?: boolean;
    children: React.ReactNode;
}

interface IPropsItem {
    text: string;
    icon?: string;
}

interface IPropsLabel {
    text: string;
}

interface IPropsMenu {
    title: string;
    children: React.ReactNode;
}

export const Dropdown = ({
    name,
    align,
    side,
    level,
    icon,
    headerFooter,
    navDropdown,
    children,
}: IProps) => {
    const [open, setOpen] = React.useState(false);
    const [height, setHeight] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        // temporary solution for smart scroll
        function calculate() {
            let number = getOffset(ref.current);
            let second = screen.height;
            let heightEl = heightElement(ref.current);

            if (heightEl > second - number.bottom) {
                setHeight(true);
            } else {
                setHeight(false);
            }
        }
        calculate();
        window.addEventListener("wheel", function() { calculate(); }, { passive: false });
        return () => {
            window.removeEventListener("wheel", function() { calculate(); });
        };
    }, [open]);

    const classes = classNames('dropdown', {
        ['open']: open,
        ['dropdown--align-right']: align === 'right',
        [`dropdown--drop${side}`]: side,
        ['dropdown--dropup']: height,
    });

    function isOpen() {
        if (!open) {
            setOpen(true);
            document.addEventListener('click', closeMenu);
        } else {
            setOpen(false);
        }
    }

    function closeMenu() {
        setOpen(false);
        document.removeEventListener('click', closeMenu);
    }

    function getOffset(el: any) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            bottom: rect.bottom + window.scrollY,
        };
    }
    function heightElement(el: any) {
        return el.clientHeight;
    }

    if (headerFooter) {
        return (
            <div className={classes} >
                <button className={navDropdown ? 'dropdown__toggle navbtn dropdown-toggle' : 'dropdown__toggle nav-btn dropdown-toggle'} onClick={isOpen}>
                    {icon ?
                        (<i className={"icon-" + icon}></i>) :
                        (<React.Fragment>{name}<span className="dropdown__caret"></span></React.Fragment>)
                    }</button>
                <div className='dropdown__menu dropdown__menu--has-head-foot' ref={ref}>
                    {children}
                </div>
            </div >
        );

    } else {
        if (level) {
            const classesMenu = classNames('dropdown__menu', {
                ['dropdown__menu--submenu-left']: align === 'left',
            });
            return (
                <li>
                    <div className={classes}>
                        <button className='dropdown__toggle dropdown-toggle'>
                            {icon && level ? <i className={icon ? ('icon-' + icon) : ''}></i> : null}
                            {name}
                        </button>
                        <ul className={classesMenu} ref={ref}>
                            {children}
                        </ul>
                    </div></li>

            );
        } else {
            return (
                <div className={classes} >
                    <button className={navDropdown ? 'dropdown__toggle navbtn dropdown-toggle' : 'dropdown__toggle nav-btn dropdown-toggle'} onClick={isOpen}>
                        {icon ?
                            (<i className={"icon-" + icon}></i>) :
                            (<React.Fragment>{name}<span className="dropdown__caret"></span></React.Fragment>)
                        }</button>
                    <ul className='dropdown__menu' ref={ref}>
                        {children}
                    </ul>
                </div >
            );
        }

    }

};

export const DropdownItem = ({
    text,
    icon,
}: IPropsItem) => {

    return (
        <li><button><i className={icon ? ('icon-' + icon) : ''}></i>{text}</button></li>
    );
};

export const DropdownDivider = ({ }) => {
    return (<li className="dropdown__menu-divider"></li>);
};

export const DropdownLabel = ({
    text,
}: IPropsLabel) => {
    return (
        <li>
            <div className="dropdown__menu-label">{text}</div>
        </li>
    );
};

export const DropdownHeader = ({
    title,
    children,
}: IPropsMenu) => {

    return (
        <ul className='dropdown__menu-header'>
            <DropdownLabel text={title} />
            {children}
        </ul>
    );
};

export const DropdownBody = ({
    title,
    children,
}: IPropsMenu) => {

    return (
        <ul className='dropdown__menu-body'>
            <DropdownLabel text={title} />
            {children}
        </ul>
    );
};

export const DropdownFooter = ({
    title,
    children,
}: IPropsMenu) => {

    return (
        <ul className='dropdown__menu-footer dropdown__menu-footer--has-list'>
            <DropdownLabel text={title} />
            {children}
        </ul>
    );
};

Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.Label = DropdownLabel;
Dropdown.Header = DropdownHeader;
Dropdown.Body = DropdownBody;
Dropdown.Footer = DropdownFooter;
