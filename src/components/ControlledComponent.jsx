import React from 'react'

const CheckBoxOrRadio = props => {
  const { values, name, type, svalues, handle } = props
  return (
    <div>
      {values.map((item, index) => {
        return (
          <label key={index}>
            <input
              type={type}
              name={name}
              value={item}
              checked={svalues.includes(item)}
              onChange={handle}
            />
            {item}
          </label>
        )
      })}
    </div>
  )
}

export default class ControlledComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      values: ['apple', 'orange', 'banana'], //所有值
      type: 'checkbox',
      name: 'fruits',
      svalues: ['orange', 'banana'], //选中的数组
      values4Radio: ['male', 'female'], //按钮
      svalues4Radio: ['female']
    }
  }

  handle = e => {
    const value = e.target.value

    // 定义一个新数组
    let newArray = []
    if (this.state.svalues.includes(value)) {
      newArray = this.state.svalues.filter(item => item !== value)
    } else {
      newArray = [value, ...this.state.svalues]
    }

    this.setState({
      svalues: newArray
    })
  }

  submit = event => {
    event.preventDefault()

    console.log(this.state.svalues)
    console.log(this.state.svalues4Radio)
  }

  // 处理radio
  handleRaido = e => {
    this.setState({
      svalues4Radio: [e.target.value]
    })
  }

  render() {
    const {
      name,
      type,
      values,
      svalues,
      values4Radio,
      svalues4Radio
    } = this.state

    const radioObj = {
      name: 'gender',
      type: 'radio',
      handle: this.handleRaido,
      values: values4Radio,
      svalues: svalues4Radio
    }
    return (
      <div>
        <form>
          {/* 受控组件之CheckBox */}
          <CheckBoxOrRadio
            handle={this.handle}
            name={name}
            type={type}
            values={values}
            svalues={svalues}
          />
          {/* 受控组件之Radio */}
          <CheckBoxOrRadio {...radioObj} />
          <input type="submit" value="提交" onClick={this.submit} />
        </form>
      </div>
    )
  }
}
