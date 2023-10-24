import { sdgData } from "./sdg.js";
import {sdgAdvices} from "./advices.js";
import {projects} from "./projects.js";
import {colors} from "./color.js";
import {badges} from "./badges.js";
import {SDG1} from "./keyNumber.js";
/* ================================ */
/* File with all the function       */
/* who allow to interact whith the  */
/* data fills                       */
/* ================================ */

/* ==== sdg.js === */
export const getSdgData = (sdg) => {
  return sdgData.find((s) => s.SDG == sdg);
};

export const getSdgTitle = (sdg) => {
  return sdgData.find((s) => s.SDG == sdg).title;
};

/* ==== advices.js === */
export const getSdgAdvices = (sdg) => {
      return sdgAdvices.find((s) => s.SDG == sdg).Advices;
}; 


/* ==== projects.js === */

export const getTESTProjet = (sdg) => {
  return projects.find((s) => s.SDG == sdg).projects;
}; 

export const getTESTWords = (sdg) => {
  return projects.find((s) => s.SDG == sdg).projects;
}; 

/* ==== badges.js === */
export const getAllBadges = ()=>{
  return badges;
}

export const getBadgeByName = (name)=>{
  return badges.find((n)=> n.Badge ==name);
}

export const getBadgesBySDG = (sdg)=>{
  return badges.filter((s)=> s.SDG ==sdg);
}

export const getBadgesByState = (state)=>{
  return badges.filter((st)=> st.State ==state);
}



/* ==== colors.js === */

export const getColorName = (id) => {
  return colors.find((color) => color.SDG == id)?.name;
};


/* ==== keyNumber === */

export const getkeynumberData = () => {
  return SDG1;
};