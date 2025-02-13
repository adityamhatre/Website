import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { motion } from "framer-motion";
const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <motion.div initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{data.name}</h3>
                <p className="description mt-3">{data.desc}</p>
                <div className="project-buttons">
                  {data.github ? (
                    <Button
                      className="btn-icon"
                      color="github"
                      href={data.github}
                      target="_blank"
                      rel="noopener"
                      aria-label="Github"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                      </span>
                    </Button>
                  ) : null}
                  {data.storeLink ? (
                    <Button
                      className="btn-store"
                      color="github"
                      href={data.storeLink}
                      target="_blank"
                      rel="noopener"
                      aria-label="Store"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-chrome" />
                      </span>
                    </Button>
                  ) : null}
                  {data.youtube ? (
                    <Button
                      className="btn-youtube"
                      color="github"
                      href={data.youtube}
                      target="_blank"
                      rel="noopener"
                      aria-label="YouTube"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-youtube" />
                      </span>
                    </Button>
                  ) : null}
                  {data.link ? (
                    <Button
                      className="btn-icon"
                      color="success"
                      href={data.link}
                      target="_blank"
                      rel="noopener"
                      aria-label="Twitter"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-arrow-right mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Read more
                      </span>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </Col>
  );
};

export default ProjectsCard;
