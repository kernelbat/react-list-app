import React, { Component } from 'react';
import { connect } from 'react-redux'
import { listData } from 'actions'
class PostContainers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }
    componentDidMount(page = 1) {
        let obj = { page: page }
        let url = Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
        this.props.listData({ url: `${this.props.url}?${url}` })
    }
    loadMore = () => {
        this.setState({ page: this.state.page + 1 })
        this.componentDidMount(this.state.page + 1)
    }
    render() {
        let { header, callback } = this.props
        return (
            <div className="py-12 bg-white">
                <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">{header} </h3>
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
                    <div className="mx-auto">
                        <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">
                            {callback()}
                        </ul>
                        <div class="flex flex-col items-center py-8">
                            <button onClick={this.loadMore} class="button">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, { listData })(PostContainers);