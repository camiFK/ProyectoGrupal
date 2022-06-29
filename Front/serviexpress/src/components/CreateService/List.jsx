import "./Styles.scss";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { act_getPublicationByUser } from "../../redux/action";

import { Toolbar, Tooltip, Typography } from "@mui/material";

import { publicationsColumns } from "./FormatTable";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ComboBoxFilter } from "../../elements/ComboBox";
import { DeletePublication } from "../../assets/sources/ApiFunctions";
import swal from "sweetalert";

const EnhancedTableToolbar = ({ filter, setFilter }) => {
  // const xDispatch = useDispatch();

  const mFilter = () => {
    setFilter(!filter);
    console.log(filter);
  };

  const [category, setCategory] = useState(null);

  const mCleanFilter = () => {
    // xDispatch(act_clearServices());
    setCategory(null);
  };

  return (
    <section>
      <Toolbar
        sx={{
          padding: "0 !important",
          width: "70vw",
        }}
      >
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="div">
          Services
        </Typography>

        <Tooltip title="Filter list" onClick={mCleanFilter}>
          <IconButton>
            <CleaningServicesIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Filter list" onClick={mFilter}>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      {filter && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "70vw",
          }}
        >
          <ComboBoxFilter category={category} setCategory={setCategory} />
        </div>
      )}
    </section>
  );
};

const MainPublication = ({ setValueTab, setPublicationID }) => {
  const xDispatch = useDispatch();

  const [filter, setFilter] = useState(false);
  const { rdcr_publications_by_user, user } = useSelector((state) => state);

  console.log(user.id, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

  useEffect(() => {
    !!user.id && xDispatch(act_getPublicationByUser(user.id));
  }, [xDispatch, user]);

  const handleDelete = (pId) => {
    swal({
      title: "Are you sure of this action? ",
      text: "Once deleted, you will not be able to recover it!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        try {

          const exec = async () => {
            const xResponse = await DeletePublication(pId);
            if (xResponse.status === 200) {
              swal("Post deleted!", {
                icon: "success",
              });
              xDispatch(act_getPublicationByUser(user.id));
            } else {
              swal("Error deleting post!", {
                icon: "error",
              });
            } 
          }; exec();

        } catch (error) {
          swal("Error deleting your information!", {
            icon: "error",
          });
        }
      } else {
        swal("Cancelled operation!");
      }
    });
  };

  const handleModify = (pId) => {
    setValueTab(2);
    setPublicationID(pId);
    // setModal({active: true, id: pId});
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "ACTIONS",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            > */}
            <IconButton
              color="warning"
              aria-label="Modify"
              size="large"
              onClick={() => handleModify(params.row.id)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            {/* </Link> */}

            <IconButton
              color="error"
              aria-label="delete"
              size="large"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
        );
      },
    },
  ];

  return (
    <section className="createService-ListMain">
      <EnhancedTableToolbar filter={filter} setFilter={setFilter} />

      <DataGrid
        sx={{ width: "70vw", height: "69vh" }}
        className="datagrid"
        rows={rdcr_publications_by_user}
        columns={publicationsColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
      />
    </section>
  );
};

export { MainPublication };

/* 
WITH PROMISES

        // DeletePublication(pId)
        // .then((res) => {
        //   if (res.status === 200) {
        //     swal("Excellent! Your information has been deleted!", {
        //       icon: "success",
        //     });
        //     xDispatch(act_getPublicationByUser(user.id));
        //   } else {
        //     swal("Error deleting your information!", {
        //       icon: "error",
        //     });
        //   }
        // })
        // .catch((err) => {
        //   swal("Error deleting your information!", {
        //     icon: "error",
        //   });
        // });

*/
/* 
try {
          
          (async () => {
            const xResponse = await DeletePublication(pId);
            if (xResponse.status === 200) {
              swal("Post deleted!", {
                icon: "success",
              });
              xDispatch(act_getPublicationByUser(user.id));
            } else {
              swal("Error deleting post!", {
                icon: "error",
              });
            }
          })();
          

        } catch (error) {
          swal("Error deleting post!", {
            icon: "error",
          });
        }
*/
