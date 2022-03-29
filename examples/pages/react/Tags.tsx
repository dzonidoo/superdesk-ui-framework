import * as React from 'react';
import * as Markup from '../../js/react';
import { clone } from 'lodash';
import { Tag, Prop, PropsList } from '../../../app-typescript';

interface ITag{
    tags: Array<any>;
}
export default class TagDoc extends React.Component<{}, ITag> {
    constructor(props){
        super(props);
        this.state = {
            tags: [
                {text: 'This is a tag'},
                {text: 'This is another tag', shade:'darker'},
                {text: 'Inverse tag', shade:'inverse'},
                {text: 'Lorem ipsum', shade:'highlight1'},
                {text: 'Dolor amet', shade:'highlight2', shape:'square'},
                {text: 'Read only tag', readOnly: true}
            ],
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(i:number){
        let newTags = clone(this.state.tags);
        newTags.splice(i, 1);
        this.setState({
            tags: newTags
        });
    }
    render() {
        return (
            <section className="docs-page__container"> 
            <h2 className="docs-page__h2">Tag</h2>
            <Markup.ReactMarkupCodePreview>{`
               <Tag text='This is a tag' onRemove={()=>false}/>
            `}
            </Markup.ReactMarkupCodePreview>
            
            <Markup.ReactMarkup>
                <Markup.ReactMarkupPreview>
                <div className='docs-page__content-row'>
                    {this.state.tags.map((tag,index)=>{
                            return (
                                <React.Fragment key={index}>
                                    <Tag keyValue={index}
                                        text={tag.text}
                                        shade={tag.shade}
                                        shape={tag.shape}
                                        readOnly={tag.readOnly}
                                        onRemove={()=>this.handleClick(index)}/>
                                </React.Fragment>
                        )
                        })}
                </div>
                </Markup.ReactMarkupPreview>
                <Markup.ReactMarkupCode>{`
                    <Tag text='This is a tag' onRemove={()=>false}/>
                    <Tag text='This is a another tag' shade='darker' onRemove={()=>false}/>
                    <Tag text='Inverse tag' shade='inverse' onRemove={()=>false}/>
                    <Tag text='Lorem ipsum' shade='highlight1' onRemove={()=>false}/>
                    <Tag text='Dolor amet' shade='highlight2' shape='square' onRemove={()=>false}/>
                    <Tag text='Read only tag' readOnly={trye} onRemove={()=>false}/> 
                `}          
                </Markup.ReactMarkupCode>
            </Markup.ReactMarkup>

            <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='text' isRequired={true} type='string' default='/' description='Tag text value.'/>
                    <Prop name='shade' isRequired={false} type='light | darker | highlight1 | highlight2 | inverse' default='light' description='Shade colour of the tag.'/>
                    <Prop name='shape' isRequired={false} type='round | square' default='round' description='Shape of tag. Round (default) or square.'/>
                    <Prop name='readOnly' isRequired={false} type='boolean' default='false' description='Removes the option to delete the tag if set to true.'/>
                    <Prop name='keyValue' isRequired={false} type='number' default='/' description='Value of the tag key.'/>
                    <Prop name='onRemove' isRequired={false} type='function' default='/' description='Callback function'/>
                </PropsList>
        </section>
        )
    }
}
