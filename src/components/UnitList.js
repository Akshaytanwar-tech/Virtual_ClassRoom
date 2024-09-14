import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const UnitList = ({ classId }) => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    // Fetch units for a specific class
    fetch(`/api/units?classId=${classId}`)
      .then((response) => response.json())
      .then((data) => setUnits(data));
  }, [classId]);

  return (
    <ListGroup>
      {units.map((unit) => (
        <ListGroupItem key={unit._id}>
          <Link to={`/units/${unit._id}`}>{unit.title}</Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default UnitList;
