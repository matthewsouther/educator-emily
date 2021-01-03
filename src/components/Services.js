import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import { Link } from 'gatsby'

const Services = ({ services }) => (
  <div>
    {services.map((service) => (
        <div key={service.heading}>
          <h3>{service.heading}</h3>
          <p>{service.description}</p>
          <Features gridItems={service.blurbs} />
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <Link className="btn" to={service.buttonTarget}>
                {service.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      ))}
  </div>
)

Services.propTypes = {
  services: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    blurbs: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
          text: PropTypes.string,
        })
      ),
  })
}

export default Services