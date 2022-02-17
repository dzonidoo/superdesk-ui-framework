import * as React from 'react';

export interface IMainPanelProps {
    children?: React.ReactNode;
    className?: string;
    onScroll?(event: React.UIEvent<HTMLDivElement>): void;
    id?: string;
}

export class MainPanel extends React.PureComponent<IMainPanelProps> {
    render() {
        const className = !this.props.className ?
            'sd-main-content-grid__content' :
            `sd-main-content-grid__content ${this.props.className}`;

        return (
            <div className={className} onScroll={this.props.onScroll} id={this.props.id || undefined}>
                {this.props.children}
            </div>
        );
    }
}
