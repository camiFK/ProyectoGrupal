import React, { useEffect, useState } from "react";
import { MySelect, MySelectTwo } from "../../elements/SelectMUI";
import { MyButtonTwo, MyTextField } from "../../elements/Forms";
import { MultiImgs } from "../UploadImg";
import "./Styles.scss";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useDispatch, useSelector } from "react-redux";
import { jalz_getAllCategories, createPublication } from "../../redux/action";
import { FormControlLabel, Switch } from "@mui/material";
 
const Form = () => {
  const [name, setName] = useState(null);
  const [Detail, setDetail] = useState(null);
  const [SomeDetail, setSomeDetail] = useState(null);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [pictures, setImage] = useState(null);
  const [status, setStatus] = useState(true);

  const xDispatch = useDispatch();

  useEffect(() => {
    xDispatch(jalz_getAllCategories());
  }, [xDispatch]);

  const { rdcr_categories, rdcr_user } = useSelector((state) => state);

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

  const mSubmit = async (e) => {
    e.preventDefault();
    const data = {
      state: status ? "Active" : "Inactive",
      title: name,
      album: pictures,
      detail: Detail,
      detail_resume: SomeDetail,
      price,
      userId: rdcr_user.id,
      categoryId: category,
      services: subcategory,
    };

    xDispatch(createPublication(data));
  };

  return (
    <form onSubmit={mSubmit} className="createService-content">

      <FormControlLabel
        sx={{ width: "100%" }}
        label="State"
        labelPlacement="start"
        control={
          <Switch
            checked={status}
            onChange={() => setStatus(!status)}
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
        placeholder="Name of service"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <MySelect
        aFirst={aCategories}
        pHandleChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <MySelectTwo
        aSecond={aServices}
        pHandleChange={(e) => {
          setSubcategory(e.target.value);
        }}
        pDad={category}
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
        value={Detail}
        onChange={(e) => setDetail(e.target.value)}
      />

      <MyTextField
        sx={{
          fieldset: {
            borderColor: "#fcdc3c !important",
          },
        }}
        label="Description"
        placeholder="Description"
        value={SomeDetail}
        onChange={(e) => setSomeDetail(e.target.value)}
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
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        inputProps={{
          min: "0",
          max: "9999",
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
      />

      <MultiImgs pStateImage={pictures} pSetStateImage={setImage} />

      <MyButtonTwo
        type="submit"
        variant="contained"
        endIcon={<LibraryAddIcon />}
      >
        Save Service
      </MyButtonTwo>
    </form>
  );
};

export default Form;