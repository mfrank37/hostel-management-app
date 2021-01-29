import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import { rooms } from '../data';

const totalPages = Math.floor(rooms.length / 4);
const pages = [[0, 4], [4, 6]];
console.log(totalPages === pages.length);

class Rooms extends Component {
  render() {
    let { search } = this.props.location;
    search = search.slice(1);
    const nextPage = () => {
      const{ params }= getParams(search);
      const currPage = params.find((el) => el.hasOwnProperty('page'));
      console.log(currPage);
      if(currPage){
        console.log(search.match(/page=\d*/));
        console.log(this.props.location.search);
        return this.props.location.pathname + '?' + search.replace(/page=\d*/, `page=${parseInt(currPage.page) + 1}`);
      } else {
        return this.props.location.pathname + '?page=' + 2;
      }
    }
    
    const prevPage = () => {
      const{ params }= getParams(search);
      const currPage = params.find((el) => el.hasOwnProperty('page'));
      console.log(currPage);
      if(currPage){
        console.log(search.match(/page=\d*/));
        console.log(this.props.location.search);
        return this.props.location.pathname + '?' + search.replace(/page=\d*/, `page=${parseInt(currPage.page <= 0 ? 1 : currPage.page) - 1}`);
      } else {
        return this.props.location.pathname;
      }
    }
    
    const getParams = (query) => {
      const params = query.split('&').map(param => {
        let key = param.split('=')[0];
        let val = param.split('=')[1];
        return {
          [key]: val
        }
      });
      console.log(params);
      if(query){
        let page = params.find((el) => el.hasOwnProperty('page')).page - 1;
        page = page <= 0 || page > totalPages ? 0 : page;
        const viewRooms = rooms.slice(...pages[page]);
        return {
          viewRooms,
          params
        }
      } else {
        const viewRooms = rooms.slice(...pages[0]);
        return {
          viewRooms,
          params
        }
      }
    };

    const { viewRooms } = getParams(search);
    return (
      <Fragment>
        <Header title='VIEW ROOMS' />
        <div>
          { 
            this.props.notFound ? <div style={{textAlign: 'center'}}>ROOM NOT FOUND! <br /> please select! </div>
            : ''
          }
        </div>
        <div className='rooms-view'>
          {
            viewRooms.map((room) =>
              <Link className='room' to={'/rooms/' + room.name}>
                <p>
                  Room     : { room.name } <br />
                  students : { room.students.length }<br />
                  beds     : { room.beds }<br />
                </p>
              </Link>
            )
          }
        </div>
        <div className='items-nav rooms'>
          <Link to={prevPage()}><li className='move left'></li></Link>
          <span>PAGE 1</span>
          <Link to={nextPage()}><li className='move right'></li></Link>
        </div>
      </Fragment>
    )
  }
};

export default Rooms;
