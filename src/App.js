import logo from './logo.svg';
import './App.css';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App=() =>{
  return (
  <div className="ui container">
      <CommentDetail author="Sam" timeAgo="Today at 0000 pm"/>
      <CommentDetail  author="Sam"/>
      <CommentDetail author="Sam"/>
      <CommentDetail author="Sam" place="BAngalore"/>
      <CommentDetail author="Sam" timeAgo="Today at 4:4:45pm" />
      <commentDetail author="Sam"/>
      <CommentDetail author="SSr"/>
  </div>
  );
  
  };
export default App;
