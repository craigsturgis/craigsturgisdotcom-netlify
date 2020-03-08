import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import withLocation from "./withLocation"

const Unsubscribe = ({ search }) => {

  const sha256hash = search.sha256hash
  const [unsubbed, setUnsubbed] = useState('Unsubscribing...')
  useEffect(() => {
    fetch(`https://hook.integromat.com/oy2w8dvsgkjpt2z6d5fr5ijlccl4u2di`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ sha256hash: sha256hash})
    })
      .then(response => response.json())
      .then(resultData => {
        console.log(resultData);
        if (resultData.emailDomain) {
          setUnsubbed("Successfully unsubscribed email with domain: @" + resultData.emailDomain)
        }
        else {
          setUnsubbed(resultData.error)
        }
      })
  }, [sha256hash])

  return (
    <p>{unsubbed}</p>
  )
}

Unsubscribe.propTypes = {
  search: PropTypes.object,
}

export default withLocation(Unsubscribe)