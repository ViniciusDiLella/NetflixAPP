import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useState } from "react";

const ButtonLink = ({ link, msg, css }) => {
  const [Destiny, SetDestiny] = useState(false);
  return (
    <>
      {Destiny && <Redirect to={link} />}
      <Button onClick={() => SetDestiny(true)} style={css}>
        {msg}
      </Button>
    </>
  );
};

export default ButtonLink;
