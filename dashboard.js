import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Divider,
  Grid,
} from "@mui/material";

import { Paper } from "@mui/material";
import Category from "../category/Category";
import DisplayAllCategory from "../category/DisplayAllCategory";
import SubCategory from "../subcategory/Subcategory";
import DisplayAllSubCategory from "../subcategory/DisplayAllsubcategory";
import Brand from "../brand/Brand";
import DisplayAllBrand from "../brand/DisplayAllBrand";
import Product from "../product/Product";
import DisplyAllProduct from "../product/DisplayAllProduct";
import ProductDetail from "../productdetail/ProductDetail";
import DisplayAllProductdetail from "../productdetail/DisplayAllProductDetail";
import MainBanner from "../mainbanner/MainBanner";
import ProductPicture from "../productpicture/ProductPicture";
import AddOffer from "../addoffers/AddOffer";
import BankOffer from "../bankoffer/BankOffer";

import { serverURL } from "../../../services/FetchNodeAdminServices";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function Dashboard() {
  var navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quickcom
          </Typography>
          <Button color="inherit">Logout</Button>  </Toolbar>
      </AppBar>
      <div>
        <Grid container>
          <Grid item xs={2}>
            <Paper
              elevation={3}
              style={{
                flexDirection: "column",
                display: "flex",
                alignItems: "center",

                height: 600,
                margin: 10,
              }}
            >
              <div>
                <img
                  src={${serverURL}/images/1.jpeg}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    marginTop: 10,
                  }}
                />
              </div>
              <div
                style={{ fontSize: 12, fontWeight: "bold", letterSpacing: 1 }}
              >
                Harry Singh
              </div>
              <div style={{ fontSize: 10, fontWeight: "bold", color: "grey" }}>
                harrysingh@gmail.com
              </div>
              <Divider style={{ width: "90%", marginTop: 5 }} />
              <div>
                <List>
                  <ListItem>  <ListItemButton>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/dashboard.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          Dashboard
                        </div>
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <ListItem style={{ marginTop: -25 }}>
                    <ListItemButton
                      onClick={() => navigate("/dashboard/displayallcategory")}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/category.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          Category
                        </div>
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <ListItem style={{ marginTop: -25 }}>
                    <ListItemButton> onClick={() =>
                        navigate("/dashboard/displayallsubcategory")
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/subcategory.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          SubCategory
                        </div>
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <ListItem style={{ marginTop: -25 }}>
                    <ListItemButton
                      onClick={() => navigate("/dashboard/displayallbrand")}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/brand-image.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          Brands
                        </div></div>
                    </ListItemButton>
                  </ListItem>
                  <ListItem style={{ marginTop: -25 }}>
                    <ListItemButton
                      onClick={() => navigate("/dashboard/displayallproduct")}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/products.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          Products
                        </div>
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <ListItem style={{ marginTop: -25 }}>
                    <ListItemButton
                      onClick={() =>
                        navigate("/dashboard/displayallproductdetail")
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/product-catalog.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          Product Details
                        </div>
                      </div>
                    </ListItemButton></div>
                    </ListItemButton>
                  </ListItem>
                  <ListItem style={{ marginTop: -25 }}>
                    <ListItemButton
                      onClick={() => navigate("/dashboard/displayallproduct")}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/products.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          Products
                        </div>
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <ListItem style={{ marginTop: -25 }}>
                    <ListItemButton
                      onClick={() =>
                        navigate("/dashboard/displayallproductdetail")
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/product-catalog.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          Product Details
                        </div>
                      </div>
                    </ListItemButton>  </ListItem>
                  <ListItem style={{ marginTop: -25 }}>
                    <ListItemButton
                      onClick={() => navigate("/dashboard/addoffer")}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/adimages.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          Products Ad
                        </div>
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <ListItem style={{ marginTop: -25 }}>
                    <ListItemButton
                      onClick={() => navigate("/dashboard/bankoffer")}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/bank-account.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          Bank Offers </div>
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <ListItem style={{ marginTop: -25 }}>
                    <ListItemButton>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/check-out.png"
                          style={{ width: 30, height: 30 }}
                        />
                        <div style={{ fontWeight: 600, marginLeft: 15 }}>
                          Logout
                        </div>
                      </div>
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Routes>
              <Route element={<Category />} path="/category"></Route>
              <Route
                element={<DisplayAllCategory />}
                path="/displayallcategory"
              ></Route>
              <Route element={<SubCategory />} path="/subcategory"></Route>
              <Route
                element={<DisplayAllSubCategory />}
                path="/displayallsubcategory"
              ></Route> <Route element={<Brand />} path="/brand"></Route>
              <Route
                element={<DisplayAllBrand />}
                path="/displayallbrand"
              ></Route>
              <Route element={<Product />} path="/product"></Route>
              <Route
                element={<DisplyAllProduct />}
                path="displayallproduct"
              ></Route>
              <Route element={<ProductDetail />} path="/productdetail"></Route>
              <Route
                element={<DisplayAllProductdetail />}
                path="/displayallproductdetail"
              ></Route>
              <Route
                element={<ProductPicture />}
                path="/productpicture"
              ></Route>
              <Route element={<MainBanner />} path="/mainbanner"></Route>
              <Route element={<AddOffer />} path="/addoffer"></Route>
              <Route element={<BankOffer />} path="/bankoffer"></Route>
            </Routes>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}