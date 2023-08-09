

function UserProfileSettings() {
  return (
    <form>
       <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px]">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
              // value={}
              // onChange={handleChange}
              type="password"
              name="lastName" />
          </div>

          <div className="flex flex-col gap-2 text-blackii w-full lg:w-[450px]">
            <label htmlFor="firstName">First Name</label>
              <input
              className="bg-[#f7f7f7] pl-2.5 py-3 text-grey rounded border border-grey outline-none"
              // value={}
              // onChange={handleChange}
              type="password"
              name="firstName" />
          </div>
    </form>
  )
}

export default UserProfileSettings