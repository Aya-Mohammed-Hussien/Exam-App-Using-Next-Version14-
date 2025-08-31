// Diplomas
export interface MetaData {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}

export interface Diploma {
  _id: string;
  name: string;
  icon: string;
}

export interface DiplomaSuccessResponse {
    metadata : MetaData ,
    subjects : Diploma[] ,
}