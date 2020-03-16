import React, {Component} from 'react';
import {connect} from 'react-redux';
import {latestNews} from '../actions';
import { bindActionCreators } from '../../../redux2/node_modules/redux';
import LatestDisplay from '../component/Home/latestDislay'

class Home extends Component{
    componentDidMount(){
        this.props.latestNews();
    }
    render(){
        return(
            <div>
                <LatestDisplay latdata={this.props.datalist.latestdata}/>
                </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
    datalist:state.results
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);