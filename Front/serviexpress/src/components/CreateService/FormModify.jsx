import React, { useEffect, useState } from "react";
import { MySelectCategory, MySelectTwo } from "../../elements/SelectMUI";
import { MyButtonTwo, MyTextField } from "../../elements/Forms";
import { MultiImgsUpload } from "../UploadImg";
import "./Styles.scss";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useDispatch, useSelector } from "react-redux";
import { act_getPublicationByUser, getPublicationId, jalz_getAllCategories } from "../../redux/action";
import { FormControlLabel, Switch } from "@mui/material";
import { UploadPublication } from "../../assets/sources/ApiFunctions";
import SearchAppBar from "./SearchMUI";
import swal from "sweetalert";

const FormModify = ({ publicationID }) => {
  const oInitial = {
    n_title: "",
    n_detail: "",
    n_someDetail: "",
    n_status: "",
    n_price: 0,
  };
  const [publicationData, setPublicationData] = useState(oInitial);
  const [category, setCategory] = useState(0);
  const [subCategory, setSubCategory] = useState(0);
  const [pictures, setImage] = useState("https://i.ibb.co/92bwv3m/aaaaaaaaaaaa.png");
  const [sendImg, setSendImg] = useState([]);

  const xDispatch = useDispatch();
  useEffect(() => {
    xDispatch(jalz_getAllCategories());
  }, [xDispatch]);

  const { publicationById, rdcr_categories, user } = useSelector(
    (state) => state
  );

  const aCategories = rdcr_categories?.map((pI) => {
    return {
      id: pI.id,
      name: pI.name,
    };
  });

  const aServices = rdcr_categories
    ?.map((pII) => {
      const x = pII.services;
      const oServices = x.map((pIII) => {
        return {
          id: pIII.id,
          name: pIII.name,
          fk_category: pII.id,
        };
      });
      return oServices;
    })
    .flat();

  useEffect(() => {
    xDispatch(getPublicationId(publicationID));
  }, [publicationID, xDispatch]);

  useEffect(() => {
    const { title, detail, detail_resume, state, price, album } =
      publicationById;
    setPublicationData({
      n_title: title,
      n_detail: detail,
      n_someDetail: detail_resume,
      n_status: state === "Active" ? true : false,
      n_price: price,
    });
    setCategory(publicationById.categoryId);
    setImage(album && album[0]);
  }, [publicationById]);
  console.log(publicationById,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  console.log(user.id,"AAAAAAAAAAAAAAAAAAAAAA");

  const mSubmit = async (e) => {
    e.preventDefault();
    const oData = {
      state: publicationData.n_status ? "Active" : "Inactive",
      title: publicationData.n_title,
      detail: publicationData.n_detail,
      detail_resume: publicationData.n_someDetail,
      price: publicationData.n_price,
      userId: user.id,
      categoryId: category,
      services: subCategory,
      pictures: sendImg,
    };

    await swal({
      title: "Are you sure of this action? ",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    }).then((willModify) => {
      if (willModify) {
        try {
          const exec = async () => {
            const xResponse = await UploadPublication(publicationID, oData);
            if (xResponse.status === 200) {
              swal("Post Modified!", {
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

  return (
    <section className="Comp-FormModify">
      <SearchAppBar />

      <form onSubmit={mSubmit} className="modifyForm-content">
        <h5 style={{ textAlign: "center", width: "100" }}>
          Edit Publication N°: {publicationID}
        </h5>
        <FormControlLabel
          label="State"
          labelPlacement="start"
          control={
            <Switch
              checked={publicationData.n_status}
              onChange={() =>
                setPublicationData({
                  ...publicationData,
                  n_status: !publicationData.n_status,
                })
              }
              color="success"
            />
          }
        />

        <MyTextField
          sx={{
            fieldset: {
              borderColor: "#fcdc3c !important",
            },
          }}
          label="Title"
          placeholder="Title of service"
          value={publicationData.n_title}
          onChange={(e) =>
            setPublicationData({ ...publicationData, n_title: e.target.value })
          }
        />

        <MySelectCategory
          aFirst={aCategories}
          pSCategory={category}
          pSetCategory={setCategory}
        />
        <MySelectTwo
          pDad={category}
          aSecond={aServices}
          pHandleChange={(e) => {
            setSubCategory(e.target.value);
          }}
          pValue={subCategory}
        />

        <MyTextField
          sx={{
            fieldset: {
              borderColor: "#fcdc3c !important",
            },
          }}
          label="Description"
          placeholder="Description"
          value={publicationData.n_someDetail}
          onChange={(e) =>
            setPublicationData({
              ...publicationData,
              n_someDetail: e.target.value,
            })
          }
        />
        <MyTextField
          required
          sx={{
            fieldset: {
              borderColor: "#fcdc3c !important",
            },
          }}
          label="MIN PRICE"
          type="number"
          value={publicationData.n_price}
          onChange={(e) => {
            setPublicationData({ ...publicationData, n_price: e.target.value });
          }}
          inputProps={{
            min: "0",
            max: "9999",
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />

        <MyTextField
          sx={{
            fieldset: {
              borderColor: "#fcdc3c !important",
            },
          }}
          id="outlined-multiline-static"
          label="Detail Of Publication"
          multiline
          rows={4}
          placeholder="Tell us about your business"
          value={publicationData.n_detail}
          onChange={(e) =>
            setPublicationData({ ...publicationData, n_detail: e.target.value })
          }
        />
        <MultiImgsUpload pStateImage={pictures} pSetStateImage={setImage} pSetSendImg={setSendImg} />

        <MyButtonTwo
          type="submit"
          variant="contained"
          endIcon={<LibraryAddIcon />}
        >
          Save Service
        </MyButtonTwo>
      </form>
    </section>
  );
};

export default FormModify;

/* 

  const mOnChange = (e) => {
    const { name, value } = e.target;
    setPublicationData({ ...publicationData, [name]: value });
  }

  useEffect(() => {
    (async () => {
        const {data} = await GetPublicationByID(publicationID);
        setPublicationData({
            n_title: "data.title",
            n_detail: data.detail,
            n_someDetail: data.someDetail,
            n_category: data.category,
            n_subCategory: data.subCategory,
            n_status: data.status,
        });
      })();
  }, [publicationID]);


  // const oInitial = {
  //   n_title: rspApi.title,
  //   n_detail: "",
  //   n_someDetail: "",
  //   n_category: null,
  //   n_subCategory: null,
  //   n_status: false,
  // }

  
    // const data = {
    //   state: status ? "Active" : "Inactive",
    //   title: name,
    //   album: pictures,
    //   detail: Detail,
    //   detail_resume: SomeDetail,
    //   price,
    //   userId: user.id,
    //   categoryId: category,
    //   services: subcategory,
    // };

    // xDispatch(createPublication(data));
*/
