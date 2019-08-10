import React, { Component } from "react";
  import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBBtn,
    MDBTable, MDBTableBody, MDBTableHead,MDBInput, MDBRow, MDBCol } from "mdbreact";

  class CheckoutProcess extends Component {
    state = {
      activeItem: "1",
      tab3Disable: true,
      tab2values:{name:"", 
      phone: "",
      email:"",
      city: "",
      neighborhood: "",
      street: "",
      building: "",
      apartment: "",
      }
    };

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };


  handleTab3DisableChange(newValue) {
    this.setState({tab3Disable: newValue});
  }

  
  handletab2valuesChange = event => {
    let newState = Object.assign({}, this.state);
    newState.tab2values[event.target.id] = event.target.value;
    this.setState(newState);

    if(event.target.value == "")
      this.handleTab3DisableChange(true)
    else{
      let count = 0;
      for (var key in this.state.tab2values) {
        
          if(this.state.tab2values[key] != "" && key != event.target.id)
            count += 1;
      }
      
      if(count == 7)
        this.handleTab3DisableChange(false)
    }
  };


  handleCreateTableCell(){
    let cartItems = this.props.orderList;
    let subtotal = 0;
    
    cartItems= cartItems.map(product => {
    subtotal += (product.props.quantity * product.props.price)
      return (
        <tr>
          <td><img height="42" width="42" src={product.props.imageURL} /></td>
          <td>{product.props.title}</td>
          <td>{product.props.quantity}</td>
          <td>{product.props.price}</td>
          <td>{parseInt(product.props.quantity) * parseFloat(product.props.price)} TRY</td>
        </tr>
            );
      });
      let deliveryChargePercentage = subtotal > 100 ? 10 : 30;
      let deliveryCharge = (subtotal * deliveryChargePercentage)/100; 
      let total = deliveryCharge + subtotal;

      let finalObject = [cartItems,subtotal,deliveryChargePercentage,deliveryCharge,total];
    return finalObject;

  }
  
  createOrder = () => {
    const updateURL =  `https://firestore.googleapis.com/v1/projects/alo-talabati/databases/(default)/documents/checkout`;    
      fetch(updateURL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          "name": {stringValue: JSON.stringify(this.state.tab2values.name)},
          "phone": {stringValue: JSON.stringify(this.state.tab2values.phone)},
          "email": {stringValue: JSON.stringify(this.state.tab2values.email)},
          "Address": {stringValue: JSON.stringify(this.state.tab2values.neighborhood + "Mahalle," + this.state.tab2values.street + "Street,"
          + this.state.tab2values.building + ", apartment:" + this.state.tab2values.apartment + "," + this.state.tab2values.city)}
          }
      })
  });
  debugger
  this.props.close();
}

    render() {
      let list = this.handleCreateTableCell();
      return (
        <MDBContainer style={{zIndex:200}}>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              Order List
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
              Personal Information
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" disabled={this.state.tab3Disable}>
              Confirm order
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <MDBTable >
              <MDBTableHead color="warning-color" textWhite>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {list[0]}
              <tr>
                <td></td>
                <td></td>
                <td>Subtotal</td>
                <td></td>
                <td>{list[1]} TRY</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Delivery Charge</td>
                <td>{list[2]}%</td>
                <td>{list[3]} TRY</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td></td>
                <td>{list[4]} TRY</td>
              </tr>
              </MDBTableBody>
            </MDBTable>
            If you buy more than 100 TRY, delivery charge will be 10%
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <MDBInput id="name" label="Name" outline size="md" onChange={this.handletab2valuesChange} />
                  <MDBInput id="phone" label="Phone" outline size="md" onChange={this.handletab2valuesChange} />
                  <MDBInput id="email" type="email" label="Email" outline size="md" onChange={this.handletab2valuesChange} />
                </MDBCol>
                <MDBCol>
                  <MDBInput id="city" label="City" outline size="md" onChange={this.handletab2valuesChange}/>
                  <MDBInput id="neighborhood" label="Neighborhood" outline size="md" onChange={this.handletab2valuesChange}/>
                  <MDBInput id="street" label="Street" outline size="md" onChange={this.handletab2valuesChange}/>
                  <MDBInput id="building" label="Building" outline size="md" onChange={this.handletab2valuesChange} />
                  <MDBInput id="apartment" label="Apartment" outline size="md" onChange={this.handletab2valuesChange}/>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
          <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <h4>The total amout : {list[4]} TRY </h4>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                 <h4>Your address :</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <h6>{this.state.tab2values.name}</h6>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <h6>{this.state.tab2values.phone}</h6>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <h6>{this.state.tab2values.neighborhood} Mahalle</h6>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <h6>{this.state.tab2values.street} Street. {this.state.tab2values.building}. D:{this.state.tab2values.apartment}</h6>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <h6>{this.state.tab2values.city}</h6>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBBtn onClick={this.createOrder} color="warning">PLACE ORDER</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default CheckoutProcess;