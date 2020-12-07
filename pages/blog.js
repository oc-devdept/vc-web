import React, {useEffect, useState} from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";
import Link from "next/link";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import moment from "moment";

// FAQ Data
import { BlogData } from "Components/data/blog-data";
import api from "Api";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';

const muiTheme = createMuiTheme({
  overrides: {
      MuiPagination: {
          root: {
              color: "#000000 !important",
          },
      },
      MuiPaginationItem: {
          root: {
              "&:hover": {
                  backgroundColor: "#000000 !important",
                  color: "#ffffff !important",
              },
              "&$selected": {
                  "backgroundColor": "#000000 !important",
                  color: "#ffffff !important",
              }
          },
      },
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: "center",
  },
  tab: {
      margin: '25px 20px',
      border: `1px solid ${theme.palette.divider}`,
      textTransform: 'capitalize',
  },
  tabPanel: {
    width: '50%',
  },
  indicator: {
    backgroundColor : '#000000',
    left: "0px",
    width: "3px",
    marginLeft: "20px"
  },
  headerBar: {
      padding: '20px',
  },
  post: {
    border: "1px solid #c0c0c0",
    padding: '20px',
    align: 'center'
  },
  date: {
    margin: "20px 20px 0",
  },
  paginationArea: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));


export default function Blog() {

  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [totalNumber, setTotalNumber] = useState(0);
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
      getTagData();
  }, []);

  const getTagData = async () => {
    let result = await api.get(`/carblogs/initialTags`);
    setTags(result.data.data.tags);
    setTotalNumber(result.data.data.totalNumber);
    setBlogs(result.data.data.blogs);
  };

  const handleChange = async (event, newValue) => {
      setValue(newValue);
      let result = await api.post(`/carblogs/getPageTagData`, {data: tags[newValue]});
      setBlogs(result.data.data.blogs);
      setTotalNumber(result.data.data.totalNumber);
  };

  const handlePage = async (event, number) => {
    let params = {
        number: number,
        tag: tags[value]
    };
    setPage(number);
    let result = await api.post(`/carblogs/getPaginationData`, {data: params});
    setBlogs(result.data.data.blogs);
    setTotalNumber(result.data.data.totalNumber);
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
    <DefaultLayout>
      <div className="section-title without-bg" align="center">
        <h2>Blog Posts</h2>
      </div>
      {/* 增加了 align="center"*/}
      <div className={classes.root} title="blogContainer">
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            TabIndicatorProps={{ className: classes.indicator }}
        >
            {tags.map((tag, key) => (
                <Tab className={classes.tab} key={key} label={tag} />
            ))}
        </Tabs>

        <TabPanel className="blogTabPanel">
          {
            blogs.length !== 0 ? (
                blogs.map(blog => (
                    <div className={classes.post} key={blog.id}>
                        <div className={classes.date} align="right">
                            <p>{moment(blog.publishDate).format('YYYY-MM-DD')}</p>
                        </div>
                        <div className={classes.headerBar}>
                            <div className="row">
                                <div className="image col-md-4">
                                    <img src={blog.file[0].path} />
                                </div>
                                <div className="text col-md-7">
                                    <h3>{blog.title}</h3>
                                    <p>{blog.intro}</p>
                                    <div className="button">
                                        <Link
                                            href={{
                                                pathname: '/blog-post/[id]',
                                                query: {id: blog.id}
                                            }}
                                            as={`/blog-post/${blog.id.replace(/ /g, "-")}`}
                                        >
                                            <a className="btn enquireBtn">
                                                READ MORE
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className={classes.post}>
                    There is no data
                </div>
            )
          }
          <div className={classes.paginationArea}>
            <Pagination count={totalNumber} page={page} onChange={handlePage} />
          </div>
        </TabPanel>
       {/* <TabPanel className="blogTabPanel" value={value} index={1}>
          <div className={classes.post}>
            <div className={classes.date} align="right">
              <p>6 Jan 2020</p>
            </div>
            <div className={classes.headerBar}>
                <div class="row">
                  <div className="image col-md-4">
                    <img src="/static/blog/blog1.png" />
                  </div>
                  <div className="text col-md-7">
                    <h3>Should you buy or lease a car in singapore?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo quis ligula posuere, et venenatis ante aliquet. Cras diam elit, tempor nec lacus in, mollis laoreet nisi. </p>
                    <div className="button">
                      <Link href="/blog-post">
                        <a className="btn enquireBtn">
                            READ MORE
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className={classes.paginationArea}>
            <Pagination count={3} />
          </div>
        </TabPanel>*/}
      </div>
    </DefaultLayout>
    </MuiThemeProvider>
  );
}
