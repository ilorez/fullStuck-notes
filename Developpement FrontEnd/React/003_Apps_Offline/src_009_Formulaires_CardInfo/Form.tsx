import React from 'react';

type Props = {
  handleSubmit: Function;
};

function Form({ handleSubmit }: Props) {
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-4 bg-white shadow-lg w-fit px-16 py-6 mt-10"
    >
      {/* name */}
      <div>
        <label htmlFor="name">
          Name: <input type="text" name="name" />
        </label>
      </div>

      {/* sex */}
      <div>
        <label htmlFor="sex">
          sex: <br /> <input type="radio" name="sex" value={'male'} required />{' '}
          Male <input type="radio" name="sex" value={'female'} required />{' '}
          Female
        </label>
      </div>

      {/* favSports */}
      <div>
        <label htmlFor="favSports">
          Fav Sports: <br />
          <div className="flex flex-col gap-2 mt-2 pl-4">
            <div>
              <input type="checkbox" name="fav_football" value={'footbal'} />{' '}
              Footbal
            </div>
            <div>
              <input type="checkbox" name="fav_tenis" value={'tenis'} /> Tenis
            </div>
            <div>
              <input type="checkbox" name="fav_swim" value={'swim'} /> swim
            </div>
          </div>
        </label>
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country">
          Country:
          <select name="country">
            <option value="Palestine">Palestine</option>
            <option value="Maroc">Maroc</option>
            <option value="algeria">algeria</option>
            <option value="egypt">egypt</option>
            <option value="Peru">Peru</option>
          </select>
        </label>
      </div>

      {/* about */}
      <div>
        <label htmlFor="about">
          about: <br />
          <textarea
            name="about"
            cols={30}
            rows={5}
            className="border border-1 border-gray-400"
          ></textarea>
        </label>
      </div>
      {/* btns */}
      <div className="w-full flex  gap-2 items-end justify-end">
        <button type="reset" className="px-2 bg-gray-200">
          reset
        </button>
        <button type="submit" className="px-2 text-white bg-blue-600">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
