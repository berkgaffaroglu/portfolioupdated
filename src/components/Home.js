import React, { Component } from 'react'
import { DiStackoverflow } from 'react-icons/di'
import { FaGithub } from 'react-icons/fa'
import { GrLinkedin, GrCircleInformation, GrDocumentUser } from 'react-icons/gr'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import CustomSpinner from './CustomSpinner'
import { AiOutlineProject } from 'react-icons/ai'
import Project from './Project'
import first from "../images/sliders/1.png"
import second from "../images/sliders/2.png"
import third from "../images/sliders/3.png"
import fourth from "../images/sliders/4.png"
import fifth from "../images/sliders/5.png"
import linkedin from "../LinkedIn.png"
import github from "../git.png"
import upwork from '../upwork.png'
import stackoverflow from "../stackoverflow.png"
import resume from "../resume.png"
import { Carousel } from 'react-bootstrap'
import Certificate from './Certificates'
import Resume from './Resume'
import About from './About'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '',
            Render: false
        }
        this.fetchAll = this.fetchAll.bind(this)
    }

    componentWillMount() {
        this.fetchAll()
    }

    async fetchAll() {
        
        var generalInfoResponse = await (fetch(`${this.props.websiteUrl}/api/general-information/`))
        var data = await generalInfoResponse.json()
        var projectResponse = await (fetch(`${this.props.websiteUrl}/api/project-list/`))
        var projectList = await projectResponse.json()
        this.setState({
            data: data,
            projectList: projectList,
            Render: true
        })


    }
    
    render() {
        function urlImage(imageUrl) {
            imageUrl = imageUrl.split(websiteUrl)[1]
            return (`${websiteUrl}/api${imageUrl}`)
        }
        var projects = this.state.projectList
        const websiteUrl = this.props.websiteUrl
        
        if (this.state.Render) {
            var data = this.state.data[0][0]
            const accountsArray = this.state.data[2]
            
            if (accountsArray) {
                const accounts = accountsArray.map((account, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                    <a
                      href={account.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-light"
                      onMouseOver={(e) => {
                        e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 1)';
                        e.target.style.transition = 'box-shadow 0.2s ease';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.boxShadow = 'none';
                        e.target.style.transition = 'box-shadow 0.2s ease';
                      }}
                    >
                      <img src={this.props.websiteUrl+'/api'+account.image} className="img-fluid social-media-button" />
                    </a>
                  </div>
                ));
              
            return (

                <div className="text-dark text-center" style={{ backgroundColor: "white" }}>
                  
                    <Carousel className="mb-5 slides animate__animated animate__fadeIn">
                        <Carousel.Item>
                        <a href={data.slide1_href} rel="noopener noreferrer" target="_blank">
                            <img
                                className="d-block w-100"
                                src= {this.props.websiteUrl+'/api'+data.slide1}
                                alt="First"
                            />
                        </a>

                        </Carousel.Item>
                        <Carousel.Item>
                            <a href={data.slide2_href} rel="noopener noreferrer" target="_blank">
                                <img
                                    className="d-block w-100"
                                    src= {this.props.websiteUrl+'/api'+data.slide2}
                                    alt="Memorychallange"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href={data.slide3_href} rel="noopener noreferrer" target="_blank">
                                <img
                                    className="d-block w-100"
                                    src= {this.props.websiteUrl+'/api'+data.slide3}
                                    alt="Portfolio"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href={data.slide4_href} rel="noopener noreferrer" target="_blank">
                                <img
                                    className="d-block w-100"
                                    src= {this.props.websiteUrl+'/api'+data.slide4}
                                    alt="Nasa API Project"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href={data.slide5_href} rel="noopener noreferrer" target="_blank">
                                <img
                                    className="d-block w-100"
                                    src= {this.props.websiteUrl+'/api'+data.slide5}
                                    alt="Ebayscraperapp"
                                />
                            </a>
                        </Carousel.Item>
                    </Carousel>
                    <div className="whoami animate__animated animate__fadeInUp mt-5">
                        <About websiteUrl={websiteUrl}/>
                    </div>
                    <div className="resumeSection animate__animated animate__fadeInUp">
                    
                        <Resume websiteUrl={this.props.websiteUrl} />

                    </div>
                    <div className="mediaAccounts animate__animated animate__fadeInUp mb-5 mt-5 animate__delay-1s">
                        <h3 className="text-center text-uppercase"><RiAccountPinCircleLine /> <strong>hesaplarım</strong></h3>
                        <hr className="separator" />
                        <div className="row text-center">
                        {accountsArray ? accounts : <span></span>}
                        </div>
                    </div>
                    <div className="certificates animate__animated animate__fadeInUp mb-5 mt-5 animate__delay-1s">
                    <Certificate websiteUrl={websiteUrl}/>
                    </div>
                    <div className="projects_developed animate__animated animate__fadeInUp animate__delay-1s">
                        <h3 className="text-black text-center mt-5" style={{ textTransform: 'uppercase' }}><strong> <AiOutlineProject /> geliştirdiğim projeler neler?</strong></h3>
                        <hr className="separator" />
                        <div className="row" style={{ marginBottom: "200px" }}>

                            {projects.map(function (project, index) {
                                function urlImage(imageUrl) {
                                    return (`${websiteUrl}/api` + imageUrl)
                                }
                                function urlDetail(detailUrl) {
                                    return ("/project-detail/" + detailUrl)
                                }

                                return (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-11 col-xs-12 mt-4">

                                        <Project
                                            websiteUrl={websiteUrl}
                                            url_detail={urlDetail(project.slug)}
                                            url_image={urlImage(project.image)}
                                            project_title={project.title}
                                            project_description={project.description}
                                            project_backend_category={project.backend_category}
                                            project_frontend_category={project.frontend_category}
                                        />
                                    </div>
                                )
                            })}
                        </div>


                    </div>


                </div>
            )
        }
        }
        else { return (<CustomSpinner />) }
    }
}

export default Home
