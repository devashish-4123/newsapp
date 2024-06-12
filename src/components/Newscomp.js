import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'



export class Newscomp extends Component {
    articles = [
        {
            source: {
                id: null,
                name: "WESH Orlando",
            },
            author: "Kellianne Klass",
            title: "Florida storms Friday: Wind and hail possible - WESH 2 Orlando",
            description:
                "Showers and storms will push into Central Florida's northern locations after 10 a.m. and slowly work south throughout the day.",
            url: "https://www.wesh.com/article/florida-forecast-friday-severe-risk/60754151",
            urlToImage:
                "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/gnn-pplxiaahxs-663e1778cb592.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            publishedAt: "2024-05-10T14:24:00Z",
            content:
                "ORLANDO, Fla. —Friday has been declared an Impact Day due tostrong/severe storms in the afternoon. \r\nWESH 2 Meteorologist Kellianne Klass says there will be two waves of storms. The first will arrive… [+1337 chars]",
        },
        {
            source: {
                id: "google-news",
                name: "Google News",
            },
            author: "CNBC",
            title:
                "Consumer sentiment tumbles as inflation fears surge, closely watched survey shows - CNBC",
            description: null,
            url: "https://news.google.com/rss/articles/CBMidWh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDUvMTAvY29uc3VtZXItc2VudGltZW50LXR1bWJsZXMtYXMtaW5mbGF0aW9uLWZlYXJzLXN1cmdlLWNsb3NlbHktd2F0Y2hlZC1zdXJ2ZXktc2hvd3MuaHRtbNIBeWh0dHBzOi8vd3d3LmNuYmMuY29tL2FtcC8yMDI0LzA1LzEwL2NvbnN1bWVyLXNlbnRpbWVudC10dW1ibGVzLWFzLWluZmxhdGlvbi1mZWFycy1zdXJnZS1jbG9zZWx5LXdhdGNoZWQtc3VydmV5LXNob3dzLmh0bWw?oc=5",
            urlToImage: null,
            publishedAt: "2024-05-10T14:13:43Z",
            content: null,
        },
        {
            source: {
                id: null,
                name: "Fox Business",
            },
            author: "Lawrence Richard",
            title:
                "Apple forced to apologize after new iPad Pro ad sparks controversy online: 'We missed the mark. We’re sorry' - Fox Business",
            description:
                "A new iPad Pro ad caused a stir on social media, with several users responding critically, forcing Apple to apologize.",
            url: "https://www.foxbusiness.com/technology/apple-forced-apologize-new-ipad-pro-ad-sparks-controversy-online-missed-mark-sorry",
            urlToImage:
                "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/05/0/0/GettyImages-1445281649.jpg?ve=1&tl=1",
            publishedAt: "2024-05-10T14:01:00Z",
            content:
                'Apple has apologized after a new iPad Pro ad was met with wide and sharp criticism.\r\nThe ad, titled "Crush!," debuted earlier this week. It shows a hydraulic press crushing instruments like a piano a… [+2986 chars]',
        },
        {
            source: {
                id: "google-news",
                name: "Google News",
            },
            author: "BBC.com",
            title: "Ukraine says it repelled Russian bid to cross border - BBC.com",
            description: null,
            url: "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jNnB5djhxOTRnMW_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvYzZweXY4cTk0ZzFvLmFtcA?oc=5",
            urlToImage: null,
            publishedAt: "2024-05-10T13:43:08Z",
            content: null,
        },
        {
            source: {
                id: null,
                name: "CBS Sports",
            },
            author: "",
            title:
                "Suns coaching candidates: Mike Budenholzer reportedly the early front-runner, but there are several options - CBS Sports",
            description:
                "The Suns fired Frank Vogel after a 49-33 season and a first-round sweep at the hands of the Minnesota Timberwolves",
            url: "https://www.cbssports.com/nba/news/suns-coaching-candidates-mike-budenholzer-reportedly-the-early-front-runner-but-there-are-several-options/",
            urlToImage:
                "https://sportshub.cbsistatic.com/i/r/2024/05/09/41131502-1502-443c-8b63-307c2dff4da8/thumbnail/1200x675/03f046eec04df8ba06609a8f8814f8d7/untitled-design-63.png",
            publishedAt: "2024-05-10T13:32:00Z",
            content:
                "Frank Vogel was on top of the coaching profession less than four years ago. On Oct. 11, 2020, his Los Angeles Lakers won their 17th championship. It was Vogel's first as a head coach, but it might wi… [+7018 chars]",
        },
        {
            source: {
                id: "espn",
                name: "ESPN",
            },
            author: null,
            title: "Toronto expansion team to join WNBA in 2026, per reports - ESPN",
            description:
                "Toronto has been awarded a WNBA franchise that will start play in 2026, according to multiple reports, when it will become the league's first team outside of the United States.",
            url: "https://www.espn.com/wnba/story/_/id/40118360/toronto-expansion-team-join-wnba-2026-per-reports",
            urlToImage:
                "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0615%2Fr867612_1296x729_16%2D9.jpg",
            publishedAt: "2024-05-10T13:05:00Z",
            content:
                "May 10, 2024, 09:05 AM ET\r\nToronto has been awarded a WNBA franchise that will start play in 2026, according to multiple reports, when it will become the league's first team outside of the United Sta… [+1640 chars]",
        },
        {
            source: {
                id: "cnn",
                name: "CNN",
            },
            author: "Lisa Respers France",
            title:
                "Justin Bieber’s mom Pattie Mallette is thrilled to become a first-time grandmother - CNN",
            description:
                "Justin Bieber’s mother Pattie Mallette can finally celebrate his big news.",
            url: "https://www.cnn.com/2024/05/10/entertainment/pattie-mallette-bieber-baby/index.html",
            urlToImage:
                "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1202425524.jpg?c=16x9&q=w_800,c_fill",
            publishedAt: "2024-05-10T12:58:00Z",
            content:
                "Justin Biebers mother Pattie Mallette can finally celebrate his big news.\r\nMallette on Thursday posted a video on her verified Instagram account of her reaction to her son and his wife, Hailey Bieber… [+1043 chars]",
        },
        {
            source: {
                id: null,
                name: "NPR",
            },
            author: "Carrie Johnson",
            title:
                "Meet the lawyer who's trying to flag judges who harass their clerks - NPR",
            description:
                "A former law clerk who had a bad experience on the job is now trying to share information about judges to help others from suffering the same fate.",
            url: "https://www.npr.org/2024/05/10/1245903951/federal-judges-clerks-harrassment",
            urlToImage:
                "https://media.npr.org/assets/img/2024/05/09/shatzman_wide-b395833766f432554310a3302ebc34849d3d4e02.jpg?s=1400&c=100&f=jpeg",
            publishedAt: "2024-05-10T12:37:39Z",
            content:
                "Aliza Shatzman created the Legal Accountability Project database to gather stories from law clerks about the judges they've worked for to help warn law students about hostile situations.\r\nAliza Shatz… [+6069 chars]",
        },
        {
            source: {
                id: "nbc-news",
                name: "NBC News",
            },
            author: "Daniel Arkin",
            title:
                "Virginia school board votes to restore names of Confederate leaders to schools - NBC News",
            description:
                "The school board in Shenandoah County, Virginia, early Friday approved a proposal that will restore the names of Confederate military leaders to two public schools.",
            url: "https://www.nbcnews.com/news/us-news/virginia-school-board-vote-restoring-names-confederate-leaders-schools-rcna151458",
            urlToImage:
                "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-05/240509-robert-lee-statue-removal-virginia-se-1108a-f6f4e7.jpg",
            publishedAt: "2024-05-10T12:30:00Z",
            content:
                "The school board in Shenandoah County, Virginia, early Friday approved a proposal that will restore the names of Confederate military leaders to two public schools.\r\nThe measure, which passed 5-1, re… [+3753 chars]",
        },
        {
            source: {
                id: null,
                name: "NPR",
            },
            author: "Suzanne Nuyen",
            title:
                "Aid workers are doubtful of a U.S.-built pier near Gaza; RFK Jr.'s dead brain worm - NPR",
            description:
                "A pier off Gaza for aid is expected to be installed soon, but aid workers have questions. RFK Jr. says doctors found a dead worm in his brain. The WHO says he's not alone.",
            url: "https://www.npr.org/2024/05/10/1250413218/up-first-newsletter-gaza-aid-pier-rfk-jr-brain-worm",
            urlToImage:
                "https://media.npr.org/assets/img/2024/05/10/gettyimages-2150186128_wide-16607041066a737674f04dd78f1f36536aa9063a.jpg?s=1400&c=100&f=jpeg",
            publishedAt: "2024-05-10T12:07:49Z",
            content:
                "Good morning. You're reading the Up First newsletter. Subscribe here to get it delivered to your inbox, and listen to the Up First podcast for all the news you need to start your day.\r\nToday's top st… [+6547 chars]",
        },
        {
            source: {
                id: null,
                name: "BBC News",
            },
            author: null,
            title:
                "Baby Reindeer: Fiona Harvey says she will sue Netflix and writer Richard Gadd - BBC.com",
            description:
                "Fiona Harvey accuses Netflix, as well as writer Richard Gadd, of lying, in a Piers Morgan interview.",
            url: "https://www.bbc.com/news/entertainment-arts-68975659",
            urlToImage:
                "https://ichef.bbci.co.uk/news/1024/branded_news/635F/production/_133293452_de29.jpg",
            publishedAt: "2024-05-10T12:01:37Z",
            content: null,
        },
        {
            source: {
                id: null,
                name: "[Removed]",
            },
            author: null,
            title: "[Removed]",
            description: "[Removed]",
            url: "https://removed.com",
            urlToImage: null,
            publishedAt: "1970-01-01T00:00:00Z",
            content: "[Removed]",
        },
        {
            source: {
                id: "cnn",
                name: "CNN",
            },
            author: "Paul P. Murphy",
            title:
                "Satellite imagery shows Palestinians fleeing Rafah’s tent cities as threat of major attack looms - CNN",
            description:
                "Palestinians have begun to flee Rafah’s tent cities in large numbers over the past 72 hours, as the threat of a potential major Israeli assault looms, new satellite imagery from Planet Labs shows.",
            url: "https://www.cnn.com/2024/05/09/middleeast/rafah-palestinians-refugees-fleeing-intl/index.html",
            urlToImage:
                "https://media.cnn.com/api/v1/images/stellar/prod/8-camp-3-may-7.jpg?c=16x9&q=w_800,c_fill",
            publishedAt: "2024-05-10T11:55:00Z",
            content:
                "Palestinians are fleeing Rafahs tent cities in large numbers as the threat of a potential major Israeli assault in the southern Gaza city looms, new satellite imagery from Planet Labs shows.\r\nCNN has… [+3714 chars]",
        },
        {
            source: {
                id: "abc-news",
                name: "ABC News",
            },
            author: "Jon Haworth",
            title:
                "Target will only sell Pride Month collection in some stores after backlash in 2023 - ABC News",
            description:
                '"Target is committed to supporting the LGBTQIA+ community during Pride Month."',
            url: "https://abcnews.go.com/US/target-sell-pride-month-collection-stores-after-backlash/story?id=110101112",
            urlToImage:
                "https://i.abcnewsfe.com/a/9992d740-4fac-40bd-ab9c-8536b73f67af/Target-Pride-Collection_1715340470033_hpMain_16x9.jpg?w=1600",
            publishedAt: "2024-05-10T11:39:08Z",
            content:
                "Target has announced that it will only sell their Pride Month collection in select stores after suffering a backlash and boycott last year during the 2023 Pride season.\r\nThe company says that instead… [+2848 chars]",
        },
        {
            source: {
                id: "nbc-news",
                name: "NBC News",
            },
            author: "Daniella Silva, Nirma Hasty",
            title:
                "She fled violence while pregnant. Now a Venezuelan migrant is trying to build a better life in the U.S. - NBC News",
            description:
                "CHICAGO — On the week of her due date, Elibexis Alvarez, a Venezuelan migrant, was preparing to give birth to her first child far away from her parents and the home country she never thought she’d leave.",
            url: "https://www.nbcnews.com/news/us-news/fled-violence-pregnant-now-venezuelan-migrant-trying-build-better-life-rcna146671",
            urlToImage:
                "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-04/240405-asylum-seekers-elibexis-alvarez-wm-527p-6f0dea.jpg",
            publishedAt: "2024-05-10T11:21:56Z",
            content:
                "CHICAGO On the week of her due date, Elibexis Alvarez, a Venezuelan migrant, was preparing to give birth to her first child far away from her parents and the home country she never thought shed leave… [+6071 chars]",
        },
        {
            source: {
                id: "cbs-news",
                name: "CBS News",
            },
            author: "Li Cohen",
            title:
                'Rare severe geomagnetic storm watch issued for first time in nearly 20 years amid "unusual" solar event - CBS News',
            description:
                "The sunspot responsible for the odd series of strong solar flares is so big you can see it with your own eyes from Earth.",
            url: "https://www.cbsnews.com/news/severe-geomagnetic-storm-watch-issued-unusual-solar-event/",
            urlToImage:
                "https://assets3.cbsnewsstatic.com/hub/i/r/2024/05/10/38a134a8-f09a-4e45-ac07-dc6b36226e61/thumbnail/1200x630/453255000498495827d3d13271b1dc0e/screenshot-2024-05-10-at-6-56-42-am.png?v=218688c1357f974b9630d4fa8914721c",
            publishedAt: "2024-05-10T11:07:00Z",
            content:
                "Sunspot could bring northern lights to New England \r\nSunspot could bring northern lights to New England02:00\r\nA severe G4 geomagnetic storm could emerge on Friday, triggering a watch for a storm of t… [+3005 chars]",
        },
        {
            source: {
                id: null,
                name: "CNBC",
            },
            author: "Annika Kim Constantino",
            title:
                "Moderna says FDA delayed RSV vaccine approval to end of May - CNBC",
            description:
                "The FDA has not informed Moderna of any issues related to the vaccine's safety, efficacy or quality that would prevent its approval, the biotech company said.",
            url: "https://www.cnbc.com/2024/05/10/moderna-says-rsv-vaccine-fda-approval-delayed-to-end-of-may.html",
            urlToImage:
                "https://image.cnbcfm.com/api/v1/image/107261604-1687528288611-gettyimages-1239618774-npekiaridis_vaccines-4.jpeg?v=1715288880&w=1920&h=1080",
            publishedAt: "2024-05-10T11:00:01Z",
            content:
                'Moderna on Friday said the Food and Drug Administration has delayed the approval of its vaccine for respiratory syncytial virus to the end of May due to "administrative constraints" at the agency.\r\nT… [+1864 chars]',
        },
        {
            source: {
                id: "google-news",
                name: "Google News",
            },
            author: "The Verge",
            title:
                "OpenAI could unveil its Google search competitor on Monday - The Verge",
            description: null,
            url: "https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3LnRoZXZlcmdlLmNvbS8yMDI0LzUvMTAvMjQxNTM0MjEvb3BlbmFpLWNoYXRncHQtZ29vZ2xlLXNlYXJjaC1jb21wZXRpdG9yLXNlcnZpY2UtaW_SAQA?oc=5",
            urlToImage: null,
            publishedAt: "2024-05-10T10:14:33Z",
            content: null,
        },
        {
            source: {
                id: "reuters",
                name: "Reuters",
            },
            author: "Reuters",
            title:
                "Trump prosecutors prepare to call final witnesses in hush money trial - Reuters",
            description: null,
            url: "https://www.reuters.com/world/us/trump-prosecutors-prepare-call-final-witnesses-hush-money-trial-2024-05-10/",
            urlToImage: null,
            publishedAt: "2024-05-10T10:08:00Z",
            content: null,
        },
        {
            source: {
                id: "google-news",
                name: "Google News",
            },
            author: "FOX 29 Philadelphia",
            title:
                "UPenn protest: Police dismantle Pro-Palestine tent encampment, arrest protesters - FOX 29 Philadelphia",
            description: null,
            url: "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3LmZveDI5LmNvbS9uZXdzL3VwZW5uLXByb3Rlc3QtcG9saWNlLWdhdGhlci1vdXRzaWRlLXByby1wYWxlc3RpbmUtZW5jYW1wbWVudC1vbi11cGVubi1jYW1wdXPSAWtodHRwczovL3d3dy5mb3gyOS5jb20vbmV3cy91cGVubi1wcm90ZXN0LXBvbGljZS1nYXRoZXItb3V0c2lkZS1wcm8tcGFsZXN0aW5lLWVuY2FtcG1lbnQtb24tdXBlbm4tY2FtcHVzLmFtcA?oc=5",
            urlToImage: null,
            publishedAt: "2024-05-10T10:00:33Z",
            content: null,
        },
    ];

    static deafultProps = {
        country :"in",
        pageSize: 8,
        category: "general"

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        };
    }
    // it is a component of lifecycle which is executed after execution of render
    //used for fetch the articles from the news api , fetching is done and in parsedData contains all info from newsapi and passed this info into articlesf
    async componentDidMount() {
        let fetchurl =
            `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b2e86bea2f354750b4dd73eaf50b28b0&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})    
        let data = await fetch(fetchurl);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading:false,
        });
    }

    handleNextClick = async () => {
        console.log("this is next");
        let fetchurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b2e86bea2f354750b4dd73eaf50b28b0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(fetchurl);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false,
        });
        
    };

    handlePreviousClick = async () => {
        console.log("this is previous");
            let fetchurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b2e86bea2f354750b4dd73eaf50b28b0&page=${this.state.page - 1
                }&pageSize=${this.props.pageSize}`;
                this.setState({loading:true})
            let data = await fetch(fetchurl);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false,
            });
        
    };

    render() {
        return (
            <div className="container my-3 " >
                <h2 className="text-center">NewsMind - Top Headlines </h2>
                {this.state.loading && <Spinner/>}
                <div className="row my-5">
                    {/* {this.state.articles.map((element)=>console.log(element))}                   example of how to use the element like article in the state */}

                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title}
                                    description={
                                        element.description ? element.description.slice(0, 100) : ""
                                    }
                                    imgUrl={element.urlToImage}
                                    newsurl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                   
                                />
                            </div>
                        ); // articles is maped and the elements in the artice is shown as NewsItem , for that we have to find unique thing in article which is "url" , therefore we set the url as key
                    })}
                </div>

                <div className="container d-flex justify-content-between ">
                    <button
                        type="button"
                        disabled={this.state.page <= 1}
                        className="btn btn-primary"
                        onClick={this.handlePreviousClick}
                    >
                        {" "}
                        &larr; Previous
                    </button>
                    <button
                        type="button"
                        disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles /this.props.pageSize)}
                        className="btn btn-primary"
                        onClick={this.handleNextClick}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default Newscomp;
