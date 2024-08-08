export const GET = async(request:Request) => {
  return Response.json({statusCode:"200",method:"GET",path:"/"});
}