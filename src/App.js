import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from 'components/PostContainers'
import PostCards from 'components/postCards'
import { connect } from 'react-redux'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  postCards = () => {
    return this.props.list_blog.map((val, i) => <PostCards liClass={'group border p-5 py-16 text-center hover:shadow-xl transition'} ie={val.ie}>
      <div className="mt-6 group-hover:text-white">
        <h4 className="text-lg leading-6 font-semibold text-gray-900">{val.title}</h4>
        <p className="mt-2 text-base leading-6 text-gray-500">
          {val.body}
        </p>
      </div>
    </PostCards>
    )
  }
  userCards = () => {
    return this.props.list_user.map((val, i) => <PostCards liClass={'group border p-5 py-5 hover:shadow-xl transition'} ie={val.id}>
      <div className="group-hover:text-white">
        <div className="text-lg leading-6"><span className="font-semibold text-gray-900">Name:</span> {val.name}</div>
        <div className="text-lg leading-6"><span className="font-semibold text-gray-900">Email:</span> {val.email}</div>
        <div className="text-lg leading-6"><span className="font-semibold text-gray-900">Gender:</span> {val.gender}</div>
      </div>
    </PostCards>
    )
  }
  render() {
    return (
      <>
        <PostContainer header={<>Our<span class="text-indigo-600"> Posts</span></>} url={'posts'} callback={this.postCards} />
        <PostContainer header={<>Our<span class="text-indigo-600"> Users</span></>} url={'users'} callback={this.userCards} />
      </>
    );
  }
}
const mapStateToProps = ({ common }) => {
  let { list_blog, list_user } = common
  return { list_blog, list_user }
}
export default connect(mapStateToProps, null)(App);
