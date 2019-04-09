import React, { Component } from 'react';
import DateSource from '../ds/DateSource';
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withSubscription(WrappedComponent,selectData) {
    class WithSubscription extends Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DateSource,props.id)
            };
        }
        componentDidMount() {
            DateSource.addChangeListener(this.handleChange);
        }
        componentWillUnmount() {
            DateSource.removeChangeListener(this.handleChange);
        }
        handleChange() {
            this.setState({
                data: selectData(DateSource,this.props.id)
            });
        }
        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
    WithSubscription.displayName = 'WithSubscription('+ getDisplayName(WrappedComponent) +')';
    return WithSubscription;
}
export default withSubscription;