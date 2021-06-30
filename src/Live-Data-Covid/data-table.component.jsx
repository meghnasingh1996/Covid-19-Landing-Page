import React from 'react';
import MaterialTable from 'material-table';

class WorldTable extends React.Component {
    constructor(props) {
      super(props);
      this.tableRef = React.createRef();
    }
    state = {
      loading:false,
      stats: [],
    }
  
    componentDidMount() {
      this.setState({ loading: true })
      fetch('https://api.covidindiatracker.com/total.json') //data source
          .then(response => response.json())
          .then(res => {
              this.setState({ stats: res, loading: false }, () => console.log(res))
          })
          .catch(error => {
              console.log(error)
          })
  }
    render() {
      return (
        <React.Fragment>
          <MaterialTable style={{
              marginLeft:'10px', 
              marginRight:'10px',
              width:'400px'  }}
            title="Live Reports"
            columns={[
              { title: 'Country', field: 'country' },
              { title: 'Total Cases', field: 'cases' }
              
            ]}
            data={this.state.stats}
            options={{
              headerStyle: {
                backgroundColor: '#FDFDFD',
                color: '#FA5652'
              }}
            }
            
          />
          <br/><br/><br/>
        </React.Fragment>
      )
    }
  }
  export default WorldTable;