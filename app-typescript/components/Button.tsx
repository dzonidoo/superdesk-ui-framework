import * as React from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

interface IButtonBase {
    id?: string;
    theme?: 'light' | 'dark'; // defaults to 'light'
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    size?: 'small' | 'normal' | 'large'; // defaults to 'normal'
    children?: never;
    icon?: string;
    disabled?: boolean;
    iconOnly?: boolean;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    'data-test-id'?: string;
}

interface IPropsButton extends IButtonBase {
    text: string;
    expand?: boolean;
    style?: 'filled' | 'hollow' | 'text-only'; // defaults to 'filled'
    shape?: 'square' | 'round'; // defaults to 'square'
    isLoading?: boolean;
}

export class Button extends React.PureComponent<IPropsButton> {
    render() {
        let classes = classNames('btn', {
            'btn--expanded': this.props.expand,
            [`btn--${this.props.size}`]: this.props.size !== 'normal' && this.props.size !== undefined,
            [`btn--${this.props.type}`]: this.props.type !== 'default' && this.props.type !== undefined,
            [`btn--${this.props.style}`]: this.props.style !== 'filled' && this.props.style !== undefined,
            'btn--disabled': this.props.disabled,
            'btn--icon-only': this.props.iconOnly,
            'btn--ui-dark': this.props.theme === 'dark',
            'btn--icon-only-circle': this.props.shape === 'round' && this.props.iconOnly,
        });

        return (
            <button
                id={this.props.id}
                className={classes}
                tabIndex={0}
                onClick={this.props.disabled ? () => false : (event) => this.props.onClick(event)}
                aria-label={this.props.iconOnly ? this.props.text : ''}
                data-test-id={this.props['data-test-id']}>
                {this.props.isLoading ? <Spinner size="mini" /> : null}
                {this.props.icon ? <Icon name={this.props.icon} /> : null}
                {this.props.iconOnly ? null : this.props.text}
            </button>
        );
    }
}
