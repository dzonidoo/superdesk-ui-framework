import * as React from "react";
import * as Markup from "../../js/react";
import { Button, Prop, PropsList } from "../../../app-typescript";
import * as Components from '../playgrounds/react-playgrounds/components/Index';

export default class ButtonsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Buttons</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Button text="button default" onClick={()=> false} />
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Coloring</h3>
                <p className="docs-page__paragraph">For Superdesk only <em>Default</em> and <em>Primary</em> buttons should be used in most cases. Other semantic colour options are allowed but should be used only in cases where a clear distinction between similarly important actions is needed (e.g. <em>Send To</em> versus <em>Publish</em> action).</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="default" onClick={()=> false} />
                        <Button text="primary" type="primary" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Other colour options</p>
                    <div className="docs-page__content-row docs-page__content-row--no-margin">
                        <Button text="success" type="success" onClick={()=> false} />
                        <Button text="warning" type="warning" onClick={()=> false} />
                        <Button text="alert" type="alert" onClick={()=> false} />
                        <Button text="highlight" type="highlight" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" onClick={()=> false} />
                        <Button text="primary" type="primary" onClick={()=> false} />
                        // Other colour options
                        <Button text="success" type="success" onClick={()=> false} />
                        <Button text="warning" type="warning" onClick={()=> false} />
                        <Button text="alert" type="alert" onClick={()=> false} />
                        <Button text="highlight" type="highlight" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Components.GraphicButtonsGroup>
                    <Components.GraphicButton graphic='design' text='View design guidelines' smallText='Design guidelines' link='#/design/buttons' />
                </Components.GraphicButtonsGroup>

                <h3 className="docs-page__h3">Hollow style</h3>
                <p className="docs-page__paragraph">Define prop <code>style="hollow"</code> to create a hollow buttons.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="default" style="hollow" onClick={()=> false} />
                        <Button text="primary" type="primary" style="hollow" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Other colour options</p>
                    <div className="docs-page__content-row docs-page__content-row--no-margin">
                        <Button text="success" type="success" style="hollow" onClick={()=> false} />
                        <Button text="warning" type="warning" style="hollow" onClick={()=> false} />
                        <Button text="alert" type="alert" style="hollow" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="hollow" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="hollow" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" style="hollow" onClick={()=> false} />
                        <Button text="primary" type="primary" style="hollow" onClick={()=> false} />
                        // Other colour options
                        <Button text="success" type="success" style="hollow" onClick={()=> false} />
                        <Button text="warning" type="warning" style="hollow" onClick={()=> false} />
                        <Button text="alert" type="alert" style="hollow" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="hollow" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="hollow" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Text only (without background)</h3>
                <p className="docs-page__paragraph">Define prop <code>style="text-only"</code> for buttons without a background.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row docs-page__content-row--no-margin">
                        <Button text="default" style="text-only" onClick={()=> false} />
                        <Button text="primary" type="primary" style="text-only" onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="text-only" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" style="text-only" onClick={()=> false} />
                        <Button text="primary" type="primary" style="text-only" onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="text-only" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Sizing</h3>
                <p className="docs-page__paragraph">
                    For the default button, no size has to be specified. 
                    To change the default size set the <code>size</code> value either to <code>small</code> or <code>large</code>. 
                    For the button to take the full width of the container add <code>expand={'{true}'}</code>.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="button large" size="large" onClick={()=> false} />
                        <Button text="button default" onClick={()=> false} />
                        <Button text="button small" size="small" onClick={()=> false} />
                    </div>
                    <div className="docs-page__content-row">
                        <Button text="large expanded button" expand={true} size="large" onClick={()=> false} />
                    </div>
                    <div className="docs-page__content-row">
                        <Button text="default expanded button" expand={true} onClick={()=> false} />
                    </div>
                    <div className="docs-page__content-row">
                        <Button text="small expanded button" expand={true} size="small" onClick={()=> false} />
                    </div>                    
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="button large" size="large" onClick={()=> false} />
                        <Button text="button default" onClick={()=> false} />
                        <Button text="button small" size="small" onClick={()=> false} />

                        <Button text="large expanded button" expand={true} size="large" onClick={()=> false} />
                        <Button text="default expanded button" expand={true} onClick={()=> false} />
                        <Button text="small expanded button" expand={true} size="small" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">States</h3>
                <p className="docs-page__paragraph">Disabled state:<code>disabled={'{true}'}</code>; Loading state:<code>isLoading={'{true}'}</code>; </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Disabled</p>
                    <div className="docs-page__content-row">
                        <Button text="default" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" disabled={true} onClick={()=> false} />
                        <Button text="default" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" disabled={true} style="hollow" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Loading</p>
                    <div className="docs-page__content-row">
                        <Button text="default" isLoading={true} onClick={()=> false} />
                        <Button text="primary" type="primary" isLoading={true} onClick={()=> false} />
                        <Button text="default" style="hollow" isLoading={true} onClick={()=> false} />
                        <Button text="primary" type="primary" isLoading={true} style="hollow" onClick={()=> false} />
                    </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Disabled
                        <Button text="default" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" disabled={true} onClick={()=> false} />
                        <Button text="default" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" disabled={true} style="hollow" onClick={()=> false} />

                        // Loading
                        <Button text="default" isLoading={true} onClick={()=> false} />
                        <Button text="primary" type="primary" isLoading={true} onClick={()=> false} />
                        <Button text="default" style="hollow" isLoading={true} onClick={()=> false} />
                        <Button text="primary" type="primary" isLoading={true} style="hollow" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Buttons with icon and text</h3>
                <p className="docs-page__paragraph">Buttons can be combined with icons from the icon font. Just add any of the available classes from the Icon font as a value of the <code>icon</code> prop.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default size</p>
                    <div className="docs-page__content-row">
                        <Button text="default" icon="info-sign" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" onClick={()=> false} />
                        <Button text="success" type="success" icon="ok" onClick={()=> false} />
                        <Button text="warning" type="warning" icon="exclamation-sign" onClick={()=> false} />
                        <Button text="alert" type="alert" icon="warning-sign" onClick={()=> false} />
                        <br />
                        <Button text="default" icon="info-sign" style="hollow" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" style="hollow" onClick={()=> false} />
                        <Button text="success" type="success" icon="ok" style="hollow" onClick={()=> false} />
                        <Button text="warning" type="warning" icon="exclamation-sign" style="hollow" onClick={()=> false} />
                        <Button text="alert" type="alert" icon="warning-sign" style="hollow" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Large and small options</p>
                    <div className="docs-page__content-row">
                        <Button text="default large" icon="info-sign" size="large" onClick={()=> false} />
                        <Button text="primary large" type="primary" icon="plus-sign" size="large" onClick={()=> false} />
                        <Button text="default small" icon="info-sign" size="small" onClick={()=> false} />
                        <Button text="primary small" type="primary" icon="plus-sign" size="small" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Default size
                        <Button text="default" icon="info-sign" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" onClick={()=> false} />
                        <Button text="success" type="success" icon="ok" onClick={()=> false} />
                        <Button text="warning" type="warning" icon="exclamation-sign" onClick={()=> false} />
                        <Button text="alert" type="alert" icon="warning-sign" onClick={()=> false} />
                        
                        <Button text="default" icon="info-sign" style="hollow" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" style="hollow" onClick={()=> false} />
                        <Button text="success" type="success" icon="ok" style="hollow" onClick={()=> false} />
                        <Button text="warning" type="warning" icon="exclamation-sign" style="hollow" onClick={()=> false} />
                        <Button text="alert" type="alert" icon="warning-sign" style="hollow" onClick={()=> false} />

                        // Large and small options
                        <Button text="default large" icon="info-sign" size="large" onClick={()=> false} />
                        <Button text="primary large" type="primary" icon="plus-sign" size="large" onClick={()=> false} />
                        <Button text="default small" icon="info-sign" size="small" onClick={()=> false} />
                        <Button text="primary small" type="primary" icon="plus-sign" size="small" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Buttons with icon font only</h3>
                <p className="docs-page__paragraph">Buttons can also contain only an icon, without any visible text. To achieve this specify the <code>icon</code> value and set <code>iconOnly={true}</code>. 
                The specified text value will be used for the <code>aria-label</code>.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Large default and small</p>
                    <div className="docs-page__content-row">
                    <Button type="warning" icon="exclamation-sign" text="exclamation-sign" size="large" iconOnly={true} onClick={()=> false} />
                        <Button type="primary" icon="plus-sign" text="plus-sign" style="hollow" size="large" iconOnly={true} onClick={()=> false} />
                        <Button type="highlight" icon="bell" text="bell" size="large" iconOnly={true} onClick={()=> false} />
                        <Button icon="info-sign" text="info-sign" iconOnly={true} onClick={()=> false} />
                        <Button type="primary" icon="plus-sign" text="plus-sign" iconOnly={true} onClick={()=> false} />
                        <Button type="success" icon="ok" text="ok" iconOnly={true} onClick={()=> false} />
                        <Button type="alert" style="hollow" icon="kill" text="kill" size="small" iconOnly={true} onClick={()=> false} />
                        <Button icon="calendar" size="small" text="calendar" iconOnly={true} onClick={()=> false} />
                        <Button type="primary" style="hollow" icon="refresh" text="refresh" size="small" iconOnly={true} onClick={()=> false} />
                    </div>

                    <p className="docs-page__paragraph">// Circle (large, default and small)</p>
                    <div className="docs-page__content-row">
                    <Button type="warning" icon="exclamation-sign" text="exclamation-sign" size="large" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="primary" icon="plus-large" text="plus-large" style="hollow" size="large" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="highlight" icon="bell" text="bell" size="large" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button size="normal" icon="info-sign" text="info-sign" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="primary" icon="plus-large" text="plus-large" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="success" icon="ok" text="ok" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="alert" icon="close-small" text="close-small" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="primary" icon="plus-large" text="plus-large" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="sd-green" icon="star" text="star" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Large default and small
                        <Button type="primary" icon="plus-sign" text="plus-sign" style="hollow" size="large" iconOnly={true} onClick={()=> false} />
                        <Button type="highlight" icon="bell" text="bell" size="large" iconOnly={true} onClick={()=> false} />
                        <Button icon="info-sign" text="info-sign" iconOnly={true} onClick={()=> false} />
                        <Button type="primary" icon="plus-sign" text="plus-sign" iconOnly={true} onClick={()=> false} />
                        <Button type="success" icon="ok" text="ok" iconOnly={true} onClick={()=> false} />
                        <Button type="alert" style="hollow" icon="kill" text="kill" size="small" iconOnly={true} onClick={()=> false} />
                        <Button icon="calendar" size="small" text="calendar" iconOnly={true} onClick={()=> false} />
                        <Button type="primary" style="hollow" icon="refresh" text="refresh" size="small" iconOnly={true} onClick={()=> false} />

                        // // Circle (large, default and small)
                        <Button type="primary" icon="plus-large" text="plus-large" style="hollow" size="large" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="highlight" icon="bell" text="bell" size="large" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button size="normal" icon="info-sign" text="info-sign" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="primary" icon="plus-large" text="plus-large" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="success" icon="ok" text="ok" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="alert" icon="close-small" text="close-small" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="primary" icon="plus-large" text="plus-large" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                        <Button type="sd-green" icon="star" text="star" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='text' isRequired={true} type='string' default='/' description='Text value of the Button. In the case of iconOnly buttons the value will be set to the aria-label.'/>
                    <Prop name='iconOnly' isRequired={false} type='boolean' default='false' description='This prop is used for Buttons with icons only. It set to true, it will visually hide the text and use the value for the aria-label.'/>
                    <Prop name='expand' isRequired={false} type='boolean' default='false' description='Spans the full width of the Button parent.'/>
                    <Prop name='style' isRequired={false} type='filled | hollow | text-only' default='filled' description='Buttons may be one of styles such as hollow buttons, buttons without background (text-only) or filled (default).'/>
                    <Prop name='shape' isRequired={false} type='square | round' default='square' description='Make shape of button round or default square.'/>
                    <Prop name='type' isRequired={false} type='default | primary | success | warning | alert | highlight | sd-green' default='default' description='Default + semantic colour variations (e.g. primary, success etc.).'/>
                    <Prop name='theme' isRequired={false} type='light | dark' default='light' description='Styles button for diffrent background.'/>
                    <Prop name='size' isRequired={false} type='small | normal | large' default='normal' description='Specifies a small, normal or large button.'/>
                    <Prop name='icon' isRequired={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Disables the Button, preventing mouse events.'/>
                    <Prop name='isLoading' isRequired={false} type='boolean' default='false' description='Adds a loading indicator and disables the button if set to true.'/>
                    <Prop name='onClick' isRequired={true} type='function' default='false' description='Callback fired when a button is pressed.'/>
                </PropsList>
            </section>
        )
    }
}
