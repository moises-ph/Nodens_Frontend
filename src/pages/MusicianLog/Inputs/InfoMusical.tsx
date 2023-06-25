import { useState, useRef } from 'react';
import { GrFormClose } from 'react-icons/gr';
import CloudinaryWidget from '../../../components/CloudinarySnipet/CloudinaryWidget';
import { InstrumentoT } from './Instrumentos';
import Lastname from './Lastname';
import Swal from 'sweetalert2';
import RegisterMusic from "../../../images/RegisterMusic.webp";

function InfoMusical({goBack , handleSubmit} : {goBack : () => void, handleSubmit : (instruments : InstrumentoT[], generos : string[], redes : { nombre: String; url: String }[]) => void}) {
  const [instrumentos, setInstrumentos] = useState<InstrumentoT[]>([]);
  const instrumento = useRef<HTMLInputElement>(null);
  const nivel = useRef<HTMLSelectElement>(null);
  const experiencia = useRef<HTMLSelectElement>(null);

  const [generos, setGeneros] = useState<string[]>([]);
  const generosMusicales = useRef<HTMLInputElement>(null);

  const [redes, setRedes] = useState<{ nombre: String; url: String }[]>([]);
  const redes_sociales = useRef<HTMLSelectElement>(null);
  const url = useRef<HTMLInputElement>(null);

  const submit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(instrumentos, generos, redes);
  };

  const checkUrl = (dom: string) => {
    let exp: RegExp | string = "";
    switch (dom) {
      case "Facebook":
        exp = /^https?:\/\/(?:www\.)?facebook\.com\/[\w.-]+$/i;
        break;
      case "Instagram":
        exp = /^https?:\/\/(?:www\.)?instagram\.com\/[\w.-]+\/?$/i;
        break;
      case "TikTok":
        exp = /^https?:\/\/(?:www\.)?tiktok\.com\/@[\w.-]+$/i;
        break;
      case "Youtube":
        exp = /^https?:\/\/(?:www\.)?youtube\.com\/@[\w-]+$/i;
        break;
      case "Linkedin":
        exp = /^https?:\/\/(?:www\.)?linkedin\.com\/in\/[\w-]+$/i;
        break;
    }
    const urlChecker = new RegExp(exp);
    if (urlChecker.test(url.current!.value)) {
      addRed();
    } else {
      console.log(exp);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor ingresa una url valida",
        timer: 3000,
      });
    }
  };

  const addRed = () => {
    if (redes_sociales.current!.value && url.current!.value) {
      if (!redes.find((e) => e.nombre === redes_sociales.current!.value)) {
        setRedes([
          ...redes,
          { nombre: redes_sociales.current!.value, url: url.current!.value },
        ]);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Por favor ingresa una red social diferente",
          timer: 3000,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor ingresa un red social",
        timer: 3000,
      });
    }
  };

  const deleteRed = (i: number) => {
    setRedes(redes.filter((e, index) => index != i));
  };

  const deleteInstrument = (i: number) => {
    setInstrumentos(instrumentos.filter((e, index) => index != i));
  };

  const addInstrument = () => {
    if (instrumento.current!.value && nivel.current!.value) {
      if (!instrumentos.find((e) => e.nombre === instrumento.current!.value)) {
        setInstrumentos([
          ...instrumentos,
          { nombre: instrumento.current!.value, nivel: nivel.current!.value },
        ]);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Por favor ingresa un instrumento diferente",
          timer: 3000,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor ingresa un instrumento y un nivel de experiencia",
        timer: 3000,
      });
    }
  };

  const checkLengthInstr = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: "6 instrumentos maximo",
    });
  };

  const deleteGen = (i: number) => {
    setGeneros(generos.filter((e, index) => index != i));
  };

  const addGen = () => {
    if (generosMusicales.current!.value) {
      if (!generos.find((e) => e === generosMusicales.current!.value)) {
        setGeneros([...generos, generosMusicales.current!.value]);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Por favor ingresa un genero diferente",
          timer: 3000,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor ingresa un genero",
        timer: 3000,
      });
    }
  };

  const checkLengthGen = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: "6 generos maximo",
    });
  };

  const checkLength = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: "5 redes maximo",
    });
  };

  return (
    <div className="bg-white transition-all bg-opacity-100 md:h-full rounded-lg w-full lg:w-10/12 flex flex-col md:flex-row items-center gap-8 py-10 md:py-16 px-24 text-black/90 shadow-xl">
      <form onSubmit={(e) => e.preventDefault()} className="md:w-1/2 flex flex-col gap-8">
        <h1 className="text-3xl">Ahora hablemos de tu talento</h1>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-lg">
              Dinos que instrumentos tocas y tu experiencia en ellos
            </p>
            <span className="italic font-thin text-sm">Max. 6</span>
            <div className="gap-1 flex max-w-full flex-wrap">
              {instrumentos.map((instr, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 text-base bg-slate-100 bg-opacity-20 rounded-md text-black/70 font-thin border-solid border-slate-600 border-[1px]"
                  >
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap h-fit">
                      {instr.nombre}
                    </span>
                    <button>
                      <GrFormClose
                        className="h-6 w-6"
                        onClick={() => deleteInstrument(i)}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-end gap-3">
            <label htmlFor="" className="w-1/2">
              <input
                required
                type="text"
                name="instrumentos"
                placeholder="Instrumento"
                ref={instrumento}
                className="bg-transparent border-solid border-b-2 min-w-36 w-fit border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none"
              />
            </label>
            <div className=" flex text-lg md:gap-4">
              <select
                required
                name=""
                id=""
                ref={nivel}
                className="ml-2 bg-transparent border-b-2 border-solid border-slate-400 w-full font-thin outline-none"
              >
                <optgroup className="backdrop-blur-md rounded-none font-thin">
                  <option className="font-thin" value="" selected>
                    Tu experiencia
                  </option>
                  <option className="font-thin" value="Menos de 1 año">
                    Menos de 1 año
                  </option>
                  <option className="font-thin" value="Mas de 1 año">
                    Mas de 1 año
                  </option>
                  <option className="font-thin" value="Mas de 2 años">
                    Mas de 2 años
                  </option>
                  <option className="font-thin" value="Mas de 5 años">
                    Mas de 5 años
                  </option>
                </optgroup>
              </select>
              <button
                className="bg-white border-orange-500 border-solid text-base hover:scale-105 border-[2px] transition text-orange-500 rounded-xl p-1"
                onClick={
                  instrumentos.length < 6 ? addInstrument : checkLengthInstr
                }
              >
                Agregar
              </button>
            </div>
          </div>
        </div>{" "}
        {/* Instrumentos */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Que generos interpretas?</h3>
          <div className="flex items-center max-w-full flex-wrap gap-1">
            {generos.map((gen, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center w-fit justify-between px-3 text-base bg-slate-100 bg-opacity-20 rounded-md text-black/70 font-thin border-solid border-slate-600 border-[1px]"
                >
                  <span className="text-ellipsis overflow-hidden whitespace-nowrap h-fit">
                    {gen}
                  </span>
                  <button>
                    <GrFormClose
                      className="h-6 w-6"
                      onClick={() => deleteGen(i)}
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="w-full flex items-center gap-4">
            <input
              type="text"
              name="genero"
              placeholder="Genero"
              ref={generosMusicales}
              className="bg-transparent border-solid border-b-2 border-slate-300 text-black/70 font-light outline-none focus:border-slate-5"
            />
            <button
              className="bg-white border-orange-500 border-solid border-[2px] hover:scale-105 transition text-orange-500 rounded-xl p-1"
              onClick={generos.length < 6 ? addGen : checkLengthGen}
            >
              Agregar
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="flex-col text-lg md:flex">
            <label>Cuanta experiencia tienes en general?</label>
            <select
              name=""
              id=""
              ref={experiencia}
              className="bg-transparent border-b-2 border-solid border-slate-400 focus:outline-none font-thin"
            >
              <optgroup className="backdrop-blur-md rounded-none font-thin">
                <option className="font-thin" value="">
                  Seleciona...
                </option>
                <option className="font-thin" value="Sin Experiencia">
                  Sin Experiencia
                </option>
                <option className="font-thin" value="Menos de 1 año">
                  Menos de 1 año
                </option>
                <option className="font-thin" value="Mas de 1 año">
                  Mas de 1 año
                </option>
                <option className="font-thin" value="Mas de 2 años">
                  Mas de 2 años
                </option>
                <option className="font-thin" value="Mas de 3 años">
                  Mas de 3 años
                </option>
                <option className="font-thin" value="Mas de 5 años">
                  Mas de 5 años
                </option>
                <option className="font-thin" value="Mas de 7 años">
                  Mas de 7 años
                </option>
                <option className="font-thin" value="Mas de 10 años">
                  Mas de 10 años
                </option>
              </optgroup>
            </select>
          </div>
        </div>
        <div>
          <h3 className="text-lg">Danos tus Redes Sociales</h3>
          <div className="max-w-full flex items-center flex-wrap">
            {redes.map((gen, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center w-fit justify-between px-3 text-base bg-slate-100 bg-opacity-20 rounded-md text-black/70 font-thin border-solid border-slate-600 border-[1px]"
                >
                  <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                    {gen.nombre}
                  </span>
                  <button>
                    <GrFormClose
                      className="h-6 w-6"
                      onClick={() => deleteRed(i)}
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex gap-3">
            <div className="flex">
              <select
                name="genero"
                ref={redes_sociales}
                className="ml-2 bg-transparent font-thin"
              >
                <optgroup className="backdrop-blur-md rounded-none font-thin">
                  <option className="font-thin" value="" selected>
                    Elige una red
                  </option>
                  <option className="font-thin" value="Facebook">
                    Facebook
                  </option>
                  <option className="font-thin" value="Instagram">
                    Instagram
                  </option>
                  <option className="font-thin" value="Linkedin">
                    Linkedin
                  </option>
                  <option className="font-thin" value="TikTok">
                    TikTok
                  </option>
                  <option className="font-thin" value="Youtube">
                    Youtube
                  </option>
                </optgroup>
              </select>
            </div>
            <input
              type="text"
              name="url"
              placeholder="URL"
              ref={url}
              className="bg-transparent border-solid w-full border-b-2 border-slate-300 text-black/70 font-light outline-none focus:border-slate-5"
            />
            <button
              className="bg-white border-orange-500 border-solid border-[2px] hover:scale-105 transition text-orange-500 rounded-xl p-1"
              onClick={() =>
                redes.length < 5
                  ? checkUrl(redes_sociales.current!.value)
                  : checkLength()
              }
            >
              Agregar
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={submit}
            className="bg-orange-500 w-fit self-center px-4 py-1 rounded-lg text-white/80 hover:scale-105 transition"
            type="submit"
          >
            Listo
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              goBack();
            }}
            className="bg-blue-500 w-fit self-center px-4 py-1 rounded-lg text-white/80 hover:scale-105 transition"
          >
            Ir atrás
          </button>
        </div>
      </form>
      <img
        src={RegisterMusic}
        className="w-1/2 rounded-lg shadow-2xl drop-shadow-2xl"
      />
    </div>
  );
}

export default InfoMusical