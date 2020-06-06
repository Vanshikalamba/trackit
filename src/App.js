import React from 'react';


import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import  CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchdata } from './api';
import coronaImage from './images/imagecovid.png';
class App extends React.Component{
    state ={
        data :{},
        country:'',
    }



    async componentDidMount(){
        const fetcheddata = await fetchdata();
        this.setState({data:fetcheddata});
    }

handleCountryChange = async(country)=>{
    const fetcheddata = await fetchdata(country);
  
    //fetch data
    this.setState({data:fetcheddata , country:country});
    //set data 

}

    render()
    {const {data , country} = this.state;
        return(
            <div className = {styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"></img>
                <Cards data={data}></Cards>
                <CountryPicker handleCountryChange = {this.handleCountryChange}></CountryPicker>
                <Chart data={data} country={country}></Chart>
            </div>
        )
    }
}

export default App;