import React, {useEffect, useState} from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";
import Link from "next/link";
import moment from "moment";

import { Icon } from '@iconify/react';
import bxCalendar from '@iconify/icons-bx/bx-calendar';
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';
import api from "Api";

export default function BlogPost(props)  {
    const [singleData, setSingleData] = useState({
        title: '',
        intro: '',
        content: '',
        publishDate: '',
        file: [],
        tags: '',
        keywords: '',
        status: '',
        id: ''
    });

    useEffect(() => {
        getSingleBlogData(props.selectedBlog.id);
    }, []);

    const getSingleBlogData = async (id) => {
        let result = await api.get(`/carblogs/getSingleBlog/?id=${id}`);
        console.log('-----------------', result.data.data);
        setSingleData(result.data.data);
    };

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

                <div className="blog-post-area">
                    <div className="row">
                        <div className="left">
                            {
                                singleData.file.length !== 0 && (
                                    <img src={singleData.file[0].path} />
                                )
                            }
                        </div>
                        <div className="right">
                            <h2>{singleData.intro}</h2>
                            <p className="iconNdate">
                                <Icon icon={bxCalendar} width="1.2rem"/>
                                <span className="post-date">{moment(singleData.publishDate).format('YYYY-MM-DD')}</span>
                            </p>
                        </div>
                    </div>
                    <h6>{singleData.title}</h6>
                    <div dangerouslySetInnerHTML={{ __html: singleData.content }} />
                </div>

                {/*{BlogPostData.map((bp, index) => (
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
                ))}*/}
            </div>
        </DefaultLayout>
    );
}

BlogPost.getInitialProps = async function({ query: id }) {
    return { selectedBlog: id.id };
};
