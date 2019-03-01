import React from 'react'

const CheckBoxOrRadio = (props) => {
    const {values,name,type,svalues,handle} = props
    return <div>
        {
            values.map((item,index)=>{
                return <label key={index}>
                    <input 
                        type={type} 
                        name={name} 
                        value={item}
                        checked={svalues.includes(item)}
                        onChange={handle}
                        />{item}
                </label>
            })
        }
    </div>
}

export default class ControlledComponent extends React.Component{
    constructor(){
        super()

        this.state = {
            values:['apple','orange','banana'], //所有值
            type:'checkbox',
            name:'fruits',
            svalues:['orange','banana'] //选中的数组
        }
    }

    handle = (e) => {
        const value = e.target.value

        // 定义一个新数组
        let newArray = []
        if (this.state.svalues.includes(value)){
            newArray = this.state.svalues.filter(item=> item !== value)
        } else {
            newArray = [value,...this.state.svalues]
        }

        this.setState({
            svalues:newArray
        })
    }

    submit = (event) => {
        event.preventDefault()

        console.log(this.state.svalues)
    }

    render(){
        const {name,type,values,svalues} = this.state
        return <div>
            <form>
                {/* 受控组件之CheckBox */}
                <CheckBoxOrRadio handle={this.handle} name={name} type={type} values={values} svalues={svalues} />
                <input type="submit" value="提交" onClick={this.submit}/>
            </form>
        </div>
    }
}