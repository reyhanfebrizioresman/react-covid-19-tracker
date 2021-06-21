import { Cards, Chart, CountryPicker, Img } from './components/index'
import styles from './app.module.css';
import { Component } from 'react';
import {fetchData} from './api/';
class App extends Component {
  state = {
    data: {},
    country : '',
  }
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data : fetchedData, country : country });
  }

  render(){ 
      const {data,country} = this.state;
    return (
      <div className={styles.container}>
          <img src={Img} className={styles.image}/>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country}/>
      </div>
    );
  }
  
}

export default App;
