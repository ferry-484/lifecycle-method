import React, { Component } from "react";

class MountingLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "LifeCycle Method1",
      data: [],
      isLoad: false,
    };
    console.log("LifeCycle Method1");
  }
  //LifeCycle Method1
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle Method1 getDerivedStateFromProps");
    return null;
  }

  //LifeCycle Method2
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (data) =>
          this.setState({
            data: data,
            isLoad: true,
          })
        //console.log(data)
      );

    //   try {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const data = await response.json();
    //     console.log(data);
    //     this.setState({
    //       data: data.splice(0, 10),
    //       isLoad: true,
    //     });
    //   } catch (err) {
    //     //alert("Something error")
    //     console.log(err);
    //   }
    //   console.log("LifeCycle Method2 Component DidMount");
    // }
  }

  //LifeCycle Method3
  // shouldComponentUpdate() {
  //   console.log("LifeCycle Method3 ShouldComponentUpdate");
  // }

  //LifeCycle Method4
  // getSnapshotBeforeUpdate(preProps, preState) {
  //   console.log("LifeCycle Method4 getSnapshotBeforeUpdate");
  // }

  //ComponenetDidUpdate
  componentDidUpdate() {
    console.log("LifeCycle Method5 ComponenetDidUpdate");
  }
  // componentDidCatch() {

  // }

  render() {
    const { data, isLoad } = this.state;
    return (
      <div>
        {this.state.name}
        {!isLoad ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {data.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default MountingLifeCycle;
