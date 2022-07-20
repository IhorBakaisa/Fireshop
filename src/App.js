import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Logitech G502',
          img: 'Mouse1.JPEG',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'gaming_mouses',
          price: '5399'
        },
        {
          id: 2,
          title: 'Logitech G703',
          img: 'Mouse2.JPEG',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'gaming_mouses',
          price: '3899'
        },
        {
          id: 3,
          title: 'Logitech G903',
          img: 'Mouse3.JPEG',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'gaming_mouses',
          price: '5399'
        },
        {
          id: 4,
          title: 'Edifier G2 II Black-Red',
          img: 'Headphone1.JPEG',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'headphones',
          price: '1299'
        },
        {
          id: 5,
          title: 'Sven AP-G988MV Black-Red',
          img: 'Headphone2.JPEG',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'headphones',
          price: '729'
        },
        {
          id: 6,
          title: 'Sven AP-G855MV Black-Red',
          img: 'Headphone3.JPEG',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'headphones',
          price: '625'
        },
        {
          id: 7,
          title: 'Razer Kiyo PRO',
          img: 'Webcam1.JPEG',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'web_cameras',
          price: '6999'
        },
        {
          id: 8,
          title: 'Logitech Webcam C920S PRO',
          img: 'Webcam2.JPEG',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'web_cameras',
          price: '3699'
        },
        {
          id: 9,
          title: 'Tracer WEB007',
          img: 'Webcam3.JPEG',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'web_cameras',
          price: '1207'
        },
      ],
      showFullItem: false,
      fillItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return 
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray) 
      this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
