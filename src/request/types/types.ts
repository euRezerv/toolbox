import { Request } from "express";

export type RequestWithPath<P> = Request<P, never, never>;
export type RequestWithBody<B> = Request<never, never, B>;
export type RequestWithQuery<Q> = Request<never, never, never, Q>;
export type RequestWithPathAndBody<P, B> = Request<P, never, B>;
export type RequestWithPathAndQuery<P, Q> = Request<P, never, never, Q>;
export type RequestWithBodyAndQuery<B, Q> = Request<never, never, B, Q>;
export type RequestWithPathAndBodyAndQuery<P, B, Q> = Request<P, never, B, Q>;

export type PaginationRequestType = {
  query: {
    page?: number;
    pageSize: number;
  };
};
