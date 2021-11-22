import axios from "axios";
import React, { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import CoursesCheckbox from "../components/CoursesCheckbox";
import ResourceTypeCheckBox from "../components/ResourceTypeCheckBox";
import "./resourcesPage.css";

export default function ResourcesPage() {
  useEffect(() => {
    getAwardingBodies();
    getResourcesTypes();
    getResources();
    getCourses();
  }, []);

  //use state to store the awarding body
  const [awardingBody, setAwardingBody] = React.useState([]);

  //use state to store the resources type
  const [resourcesType, setResourcesType] = React.useState([]);

  //use state to store the resource
  const [resource, setResource] = React.useState([]);

  //use state for seletec awarding body id
  const [selectedAwardingBodyId, setSelectedAwardingBodyId] = React.useState(
    []
  );

  //use state to store the filtered resource
  const [filteredResource, setFilteredResource] = React.useState([]);

  //use state to store the course
  const [courses, setCourses] = React.useState([]);

  //get all awarding bodies
  const getAwardingBodies = () => {
    try {
      axios.get("/awarding_bodies").then((res) => {
        console.log(res.data);
        setAwardingBody(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //get all resources types
  const getResourcesTypes = () => {
    try {
      axios.get("/resource_types").then((res) => {
        console.log(res.data);
        setResourcesType(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //get all resources
  const getResources = () => {
    try {
      axios.get("/resources").then((res) => {
        console.log(res.data);
        setResource(res.data);
        setFilteredResource(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //get all courses
  const getCourses = () => {
    try {
      axios.get("/courses").then((res) => {
        console.log(res.data);
        setCourses(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const showFilteredResoults = (filters) => {
    let filteredAwardingBody = [];

    if (
      filters.courses.length > 0 &&
      filters.awardingBody.length > 0 &&
      filters.resourceType.length > 0
    ) {
      filteredAwardingBody = resource.filter(
        (resource) =>
          filters.courses.includes(resource.course_id) &&
          filters.awardingBody.includes(resource.awardingbody_id) &&
          filters.resourceType.includes(resource.resourcetype_id)
      );
      setFilteredResource(filteredAwardingBody);
    } else if (filters.courses.length > 0 && filters.awardingBody.length > 0) {
      filteredAwardingBody = resource.filter(
        (resource) =>
          filters.courses.includes(resource.course_id) &&
          filters.awardingBody.includes(resource.awardingbody_id)
      );
      setFilteredResource(filteredAwardingBody);
    } else if (filters.courses.length > 0 && filters.resourceType.length > 0) {
      filteredAwardingBody = resource.filter(
        (resource) =>
          filters.courses.includes(resource.course_id) &&
          filters.resourceType.includes(resource.resourcetype_id)
      );
      setFilteredResource(filteredAwardingBody);
    } else if (
      filters.awardingBody.length > 0 &&
      filters.resourceType.length > 0
    ) {
      filteredAwardingBody = resource.filter(
        (resource) =>
          filters.awardingBody.includes(resource.awardingbody_id) &&
          filters.resourceType.includes(resource.resourcetype_id)
      );
      setFilteredResource(filteredAwardingBody);
    } else if (filters.courses.length > 0) {
      filteredAwardingBody = resource.filter((resource) =>
        filters.courses.includes(resource.course_id)
      );
      setFilteredResource(filteredAwardingBody);
    } else if (filters.awardingBody.length > 0) {
      filteredAwardingBody = resource.filter((resource) =>
        filters.awardingBody.includes(resource.awardingbody_id)
      );
      setFilteredResource(filteredAwardingBody);
    } else if (filters.resourceType.length > 0) {
      filteredAwardingBody = resource.filter((resource) =>
        filters.resourceType.includes(resource.resourcetype_id)
      );
      setFilteredResource(filteredAwardingBody);
    } else {
      setFilteredResource(resource);
    }
  };

  const [Filters, setFilters] = useState({
    category: [],
    awardingBody: [],
    courses: [],
    resourceType: [],
  });
  //handle the change of awarding body
  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (category === "awardingBody") {
      setSelectedAwardingBodyId(filters);
    }
    showFilteredResoults(newFilters);
    setFilters(newFilters);
    console.log(newFilters);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid justify-content-between mx-5">
          {/* left elements */}
          <div className="d-flex">
            {/* Brand  */}

            <a className="navbar-brand" href="https://www.globaledulink.co.uk/">
              <img
                src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/gel-icon.png"
                alt=""
                className="d-inline-block align-text-top"
              />
              <img
                src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/gel-logo-text.png"
                alt=""
                className="d-inline-block align-text-top hide-mobile"
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse" id="navbarNav"> */}
          <ul className="navbar-nav flex-row d-none d-md-flex">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                COURSES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                AWARDING BODIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                OUR PRODUCTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FREEBIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>

          <button
            className="btn btn-outline-primary btn-rounded btn-enquire"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
          >
            Enquire Now
          </button>

          {/* Right elements  */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3 me-lg-2">
              <a className="nav-link" href="#">
                <i className="fas fa-search fa-lg" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-2">
              <a className="nav-link" href="#">
                <span>
                  <i className="fas fa-heart fa-lg"></i>
                </span>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-2">
              <a className="nav-link" href="#">
                <i className="fas fa-shopping-bag fa-lg"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-2">
              <button
                className="btn"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
              >
                LOGIN
              </button>
            </li>
            <li className="nav-item me-3 me-lg-2">
              <button
                className="btn btn-secondary btn-register rounded-pill"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
              >
                REGISTER
              </button>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </nav>
      <section class="body">
        <div class="row">
          <div class="bg-light col-3 checkbox">
            <div class="left-header py-4">
              <h3 class="w-1000">Refine your Search</h3>
            </div>

            <div class="left-body">
              <div class="left-body-first py-4">
                <h4>Awaring Bodies</h4>
                {/* display awading bodies */}
                <Checkbox
                  awardingBody={awardingBody}
                  handleFilters={(filters) =>
                    handleFilters(filters, "awardingBody")
                  }
                />
              </div>

              <div class="left-body-second pb-4">
                <h4>Courses</h4>
                {/* display resources types */}
                <CoursesCheckbox
                  courses={courses}
                  handleFilters={(filters) => handleFilters(filters, "courses")}
                />
              </div>
              <div class="left-body-second">
                <h4>Resource Type</h4>
                <ResourceTypeCheckBox
                  resourceType={resourcesType}
                  handleFilters={(filters) =>
                    handleFilters(filters, "resourceType")
                  }
                />
              </div>
            </div>
          </div>

          <div class="col-9 mt-3">
            <div class="row g-4">
              {/* display resources */}
              {filteredResource.map((resource) => (
                <div class="col-md-6 col-lg-3 px-3">
                  <div class="card bg-light">
                    <img
                      class="card-img-top resource_image"
                      src={resource.resource_image}
                      alt=""
                    />
                    <div class="card-body text-center d-flex flex-column">
                      <strong class="card-title">
                        {resource.resource_name}
                      </strong>
                      <button
                        class="btn btn-primary mt-3 mb-3"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                      >
                        View now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
