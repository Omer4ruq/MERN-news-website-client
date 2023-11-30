import React from "react";

const UpdatePage = () => {
  return (
    <div>
      <div>
        <form>
          {/* <div>
          <input {...register("firstName")} />
        </div> */}

          {/* <input type="submit" /> */}
        </form>
        <section className="p-6 bg-gray-800 text-gray-50">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Article Title</label>
                  <input
                    {...register("articleTitle")}
                    id="articleTitle"
                    type="text"
                    placeholder="Article Title"
                    name="articleTitle"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Publisher</label>
                  <div>
                    {" "}
                    <select
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                      name="publisherName"
                      {...register("publisherName")}
                      defaultValue={""}
                    >
                      <option selected>Select</option>
                      {publishersList.map((publisher) => (
                        <option key={publishersList._id}>
                          {publisher.publisherName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Email</label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    defaultValue={user.email}
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Author name</label>
                  <input
                    {...register("name")}
                    id="name"
                    type="name"
                    placeholder="name"
                    name="name"
                    defaultValue={user.displayName}
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Author Image</label>
                  <input
                    {...register("authorImage")}
                    id="authorImage"
                    type="text"
                    placeholder="name"
                    name="authorImage"
                    defaultValue={user.photoURL}
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Approve Status</label>

                  {isAdmin ? (
                    <select
                      className="w-full rounded-md focus:ring focus:ri focus:ri bg-green-500 border-gray-700 text-gray-900"
                      name="status"
                      {...register("status")}
                      defaultValue={``}
                    >
                      <option>Pending</option>
                      <option>Approve</option>
                    </select>
                  ) : (
                    <select
                      className="w-full rounded-md focus:ring focus:ri focus:ri bg-green-500 border-gray-700 text-gray-900"
                      name="status"
                      {...register("status")}
                      defaultValue={``}
                    >
                      <option selected>Pending</option>
                    </select>
                  )}
                </div>

                <div className="col-span-full">
                  <label className="text-sm">Description</label>
                  <textarea
                    {...register("description")}
                    id="bio"
                    name="description"
                    placeholder="Description"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <label className="text-sm">Submit Time</label>
                  <input
                    type="text"
                    {...register("date")}
                    className="w-full bg-green-500 text-gray-900"
                    defaultValue={moment().format("MMMM Do YYYY, h:mm:ss a")}
                  />
                </div>
                <div>
                  <label className="text-sm ">Tags</label>
                  <select
                    {...register("tags")}
                    name="tags"
                    className="text-gray-900"
                  >
                    <option value="sports">sports</option>
                    <option value="war">war</option>
                    <option value="health">health</option>
                    <option value="politics">politics</option>
                    <option value="education">education</option>
                    <option value="travle">travle</option>
                    <option value="scince">scince</option>
                    <option value="bd">bd</option>
                    <option value="Entertainment">Entertainment</option>
                  </select>
                  {/* <Select
                  {...register("tags")}
                  name="tags"
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                /> */}
                </div>
                <div className="col-span-full sm:col-span-3 ml-8">
                  <label className="text-sm">News Category</label>

                  <select
                    className="w-full rounded-md focus:ring focus:ri focus:ri bg-slate-300 border-gray-700 text-slate-950"
                    name="category"
                    {...register("category")}
                    defaultValue={``}
                  >
                    <option selected>Select</option>
                    <option>World News</option>
                    <option>Around The Bangladesh</option>
                    <option>Political News</option>z<option>Sports News</option>
                    <option>Entertainment News</option>
                    <option>Health and Life Style</option>
                    <option>Travel</option>
                    <option>Scince and Technology</option>
                    <option>Education</option>
                    <option>Business News</option>
                    <option>Editor's Column</option>
                  </select>
                </div>
                <div id="fileUpload" className="col-span-full text-gray-900">
                  <div className="mb-2 block text-gray-900">
                    <Label htmlFor="file" value="Upload file" />
                  </div>
                  <FileInput
                    {...register("image", { required: true })}
                    id="file"
                    helperText="A profile picture is useful to confirm your are logged into your account"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 
         hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 w-72 mt-1 ml-28"
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdatePage;
