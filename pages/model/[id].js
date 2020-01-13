import React, { Component } from "react";
import Default from "Components/Layout/PageTemplates/Default";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
const Model = props => {
  return (
    <Default>
      <section className="contact-area pb-60">
        <div className="container">
          <div className="section-title">
            {/* <Step1 {...props}/>       */}
            <h2>{props.show.name}</h2>
            <Link class="btn-primary" href={`/product/grade/${(props.show.id)}`}> 
              <a>Customize</a>
            </Link>
          </div>
        </div>
      </section>
    </Default>
  )
};

Model.getInitialProps = async function({ctx}) {
 
  const { id } = ctx.query;
  // console.log('getInitialProps')
  // console.log(ctx)
  const res = await fetch(`http://159.65.14.175:3001/api/categories/${id}`);
  const show = await res.json();
  return {show};
};

export default Model;


