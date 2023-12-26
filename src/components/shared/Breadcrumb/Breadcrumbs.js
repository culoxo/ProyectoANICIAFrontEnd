import React from "react";
import { Link, useMatches, useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Breadcrumbs() {
  let matches = useMatches();

  const navigate = useNavigate();
  let goBack = null;

  let crumbsFiltered = matches.filter((match) => Boolean(match.handle?.crumb));

  let crumbs = crumbsFiltered.map((match) => {
    const aux = { ...match.handle.crumb(match.params) };
    aux.path = match.pathname;
    return aux;
  });

  const specificCrumb = crumbsFiltered[crumbsFiltered.length - 1];

  if (specificCrumb.handle.getNavigateUrl) {
    goBack = specificCrumb.handle.getNavigateUrl();
  }

  return (
    <div className="breadcrumb align-items-center">
      {goBack && (
        <IoIosArrowBack
          style={{ fontSize: "30px", marginRight: "15px", cursor: "pointer" }}
          onClick={() => {
            navigate(goBack);
          }}
        />
      )}
      {crumbs.map((crumb, index) => (
        <>
          <Link
            className={`${index === 0 ? "fs-breadcrumb-title" : ""}`}
            to={crumb.path === "/admin" ? "" : crumb.path}
            key={`${crumb.path}`}
          >
            {crumb}
          </Link>
          {index !== crumbs.length - 1 && (
            <IoIosArrowForward className="mx-4" />
          )}
        </>
      ))}
    </div>
  );
}

export default Breadcrumbs;
