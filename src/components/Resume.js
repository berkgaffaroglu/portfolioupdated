import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import DownloadLink from 'react-download-link';
import { GrDocumentUser } from 'react-icons/gr';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from "../pdfs/resume.pdf"
import resume_png from "../resume.png"
import CustomSpinner from './CustomSpinner';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Resume extends Component {
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
        var generalInfoResponse = await (fetch(`${this.props.websiteUrl}/api/get-resume/`))
        var data = await generalInfoResponse.json()
        this.setState({
            data: data,
            Render: true
        })


    }
    
    render() {
        if (this.state.Render) {
            var data = this.state.data
        return (
            <>
                <h3 className="text-center text-uppercase animate__animated animate__fadeIn"><GrDocumentUser /> <strong>özgeçmişim</strong></h3>
                <hr className="separator" />
                <center className="mb-3 p-3" style={{ border: "4px solid #e9e9e9" }}>

                    <DropdownButton variant="outline-info btn-lg" style={{float:"right", zIndex: "10"}} title="Özgeçmişimi İndir">
                        <Dropdown.Item href={this.props.websiteUrl+'/api'+data.pdf} rel="noopener noreferrer" download>.PDF</Dropdown.Item>
                        <Dropdown.Item href={this.props.websiteUrl+'/api'+data.image} rel="noopener noreferrer" download>.PNG</Dropdown.Item>

                    </DropdownButton>
                    <img src={this.props.websiteUrl+'/api'+data.image} className="img-fluid"/>
                </center>
            </>
        );
        } else {
            return <CustomSpinner />
        }
    }
}

export default Resume;