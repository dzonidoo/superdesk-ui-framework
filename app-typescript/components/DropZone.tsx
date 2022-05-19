import * as React from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';
interface IProps {
    icon?: boolean;
    iconSmall?: boolean;
    text?: string;
    heading?: string;
    className?: string;
    width?: 'auto' | 'full';
    type?: 'default' | 'primary' | 'highlight' | 'darker';
    state?: 'normal' | 'active'; // defaults to 'normal'
    value?: 'button' | 'submit' | 'reset'; // defaults to 'button'
    fullScreenMode?: boolean;
    // onClick(): void;
}
interface IState {
    dragClass: boolean;
    dropClass: boolean;
}
export class DropZone extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            dragClass: false,
            dropClass: false,
        };
        this.drop = this.drop.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragEnter = this.dragEnter.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
    }
    drop(event: any) {
        event.preventDefault();
        this.setState({dropClass: true, dragClass: false});
        // var data = event.dataTransfer.getData("Text");
    }
    dragOver(event: any) {
        event.preventDefault();
        this.setState({dragClass: true});
    }
    dragEnter(event: any) {
        event.preventDefault();
    }
    dragLeave(event: any) {
        event.preventDefault();
        this.setState({dragClass: false});
    }
    render() {
        let classes = classNames('sd-dropzone__drop-target', {
            'sd-dropzone__drop-target--ondragover': this.state.dragClass,
            'sd-dropzone__drop-target--ondrop': this.state.dropClass,
            [`sd-dropzone__drop-target--${this.props.type}`]: this.props.type,
            'sd-dropzone__full-screen-mode': this.props.fullScreenMode,
        }, this.props.className);
        return (

            <div className={classes}
            onDragLeave={(event) => this.dragLeave(event)}
            onDragEnter={(event) => this.dragEnter(event)}
            onDragOver={(event) => this.dragOver(event)}
            onDrop={(event) => this.drop(event)}
            onDragStart={() => false}
            onDragEnd={() => false}
            >

                {this.props.fullScreenMode ||
                <>
                <div className='sd-dropzone__target-border'>
                </div>
                <input type="file" className='sd-dropzone__input'/>
                {this.props.icon ?
                    <figure className='sd-dropzone__icon' aria-hidden='true'>
                        <Icon name='upload-alt' size='big' />
                    </figure> : null}
                {this.props.heading ?
                    <h4 className='sd-dropzone__heading'>{this.props.heading}</h4> : null}
                    <p className='sd-dropzone__description'>{this.props.text}</p>
                </>
                }
            </div>
        );
    }
}
