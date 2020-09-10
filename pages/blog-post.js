import React, { Component } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";
import Link from "next/link";

// Blog Post Data
import { BlogPostData } from "Components/data/blog-post-data";

import { Icon } from '@iconify/react';
import bxCalendar from '@iconify/icons-bx/bx-calendar';
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';

class BlogPost extends Component {
    render() {
      return (
        <DefaultLayout>
            <div className="blog-post-main-area">
                <div className="link">
                    <Link href="/blog">
                        <h5>
                            <Icon icon={bxArrowBack} />
                            <span className="back">Back to all blog posts</span>
                        </h5>
                    </Link>
                </div>
                {BlogPostData.map((bp, index) => (
                <div className="blog-post-area" eventKey={index} key={index}>
                    <div className="row">
                        <div className="left">
                            <img src={bp.image} />
                        </div>
                        <div className="right">
                            <h2>{bp.blogTitle}</h2>
                            <p className="iconNdate"> 
                                {bp.icon}
                                <span className="post-date">{bp.date}</span>
                            </p>
                        </div>
                    </div>
                <h6>{bp.title}</h6>
                {bp.sections.length > 0 &&
                bp.sections.map((section, indx) => (
                    <div className="blog-post-section" key={indx}>
                    <p>{section.desc1}</p>
                    <p>{section.desc2}</p>
                    <p>{section.desc3}</p>
                    <p>{section.list1}</p>
                    <p>{section.list2}</p>
                    <p>{section.list3}</p>
                    <p>{section.list4}</p>
                    <p>{section.list5}</p>
                    <p>{section.para1}</p>
                    </div>
                ))}
                </div>
            ))}
            </div>
        </DefaultLayout>
      );
    }
  }
  
  export default BlogPost;