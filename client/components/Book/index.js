import React, {Component} from 'react'
import style from './style.scss'
import {fetchJsonp} from 'fetch-jsonp'

export default class Book extends Component {

  fetchData(isbn){
    const url = 'https://api.douban.com/v2/book/isbn/9787115369093'
    let data;
    console.log(typeof fetchJsonp)
    // fetchJsonp(url)
    //   .then((response)=>{
    //     return response.json()
    //   }).then((json)=>{
    //     data = json;
    //   })
    data = {
      images: {large: "https://img3.doubanio.com/lpic/s28259431.jpg"},
      author: "[美]马丁•福勒（Martin Fowler）",
      summary:"本书清晰揭示了重构的过程，解释了重构的原理和最佳实践方式，并给出了何时以及何地应该开始挖掘代码以求改善。书中给出了70 多个可行的重构，每个重构都介绍了一种经过验证的代码变换手法的动机和技术。本书提出的重构准则将帮助你一次一小步地修改你的代码，从而减少了开发过程中的风险。"
    };
    return data;
  }

  render() {
    debugger;
    const data = this.fetchData(this.props.isbn);
    return(
      <div>
        <img src={data.images.large} alt={data.alt}/>
        <div>
          <h3>{data.subtitle}</h3>
          <span>{data.author}</span>
          <span>{data.summary}</span>
        </div>
      </div>
    )
  }
}
