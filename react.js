function Car(props) {
  const classes = ['card']

  if (props.car.marked) {
    classes.push('marked')
  }

  return (
    <div className={classes.join(' ')} onClick={props.onMark}>
      <div className="card-img">
        <img src={props.car.img} alt={props.car.name} />
      </div>
      <h3>{props.car.name}</h3>
      <p>{props.car.price} $</p>
    </div>
  )
}

class App extends React.Component {
  state = {
    cars: [
      {
        marked: false,
        name: 'BMW i8',
        price: 20000,
        img:
          'https://s.auto.drom.ru/i24215/c/photos/fullsize/bmw/i8/bmw_i8_772564.jpg',
      },
      {
        marked: false,
        name: 'Audi TT',
        price: 15000,
        img:
          'https://hdfon.ru/wp-content/uploads/hdfon.ru-307822776-640x480.jpg',
      },
      {
        marked: false,
        name: 'Bentley Continental GT',
        price: 30000,
        img:
          'https://avatars.mds.yandex.net/get-verba/787013/2a000001609d3308213ea15e80fb68e77bfd/cattouchret',
      },
      {
        marked: false,
        name: 'Mercedes AMG GT',
        price: 22000,
        img:
          'http://krasnodar.cardana.ru/img/auto/mercedes_benz/amg_gt_coupe/amg_gt_coupe_1b.jpg',
      },
    ],
    visible: true,
    appTitle: 'Cars application',
  }

  handleMarked(name) {
    const cars = this.state.cars.concat()

    const car = cars.find((c) => c.name === name)
    car.marked = !car.marked

    this.setState({ cars })
  }

  toggleHandler() {
    this.setState({ visible: !this.state.visible })
  }

  renderCars() {
    if (!this.state.visible) {
      return null
    }

    return this.state.cars.map((car) => {
      return (
        <Car
          car={car}
          key={car.name + Math.random()}
          onMark={this.handleMarked.bind(this, car.name)}
        />
      )
    })
  }

  titleChangeHandler(title) {
    if (title.trim() === '') {
      return
    }

    this.setState({ appTitle: title })
  }

  render() {
    const style = {
      marginRight: 20,
    }

    return (
      <div className="app">
        <h1>{this.state.appTitle}</h1>
        <button onClick={() => this.toggleHandler()} style={style}>
          Toggle
        </button>
        <input
          type="text"
          placeholder="Change title"
          onChange={(event) => this.titleChangeHandler(event.target.value)}
          value={this.state.appTitle}
        />

        <hr />
        <div className="list">{this.renderCars()}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
