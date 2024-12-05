import AI from "./svg/AI.svg?react";
import AVI from "./svg/AVI.svg?react";
import BMP from "./svg/BMP.svg?react";
import CRD from "./svg/CRD.svg?react";
import CSV from "./svg/CSV.svg?react";
import DLL from "./svg/DLL.svg?react";
import DOC from "./svg/DOC.svg?react";
import DOCX from "./svg/DOCX.svg?react";
import DWG from "./svg/DWG.svg?react";
import EPS from "./svg/EPS.svg?react";
import EXE from "./svg/EXE.svg?react";
import FLV from "./svg/FLV.svg?react";
import GIFF from "./svg/GIFF.svg?react";
import HTML from "./svg/HTML.svg?react";
import ISO from "./svg/ISO.svg?react";
import JAVA from "./svg/JAVA.svg?react";
import JPG from "./svg/JPG.svg?react";
import MDB from "./svg/MDB.svg?react";
import MID from "./svg/MID.svg?react";
import MOV from "./svg/MOV.svg?react";
import MP3 from "./svg/MP3.svg?react";
import MP4 from "./svg/MP4.svg?react";
import MPEG from "./svg/MPEG.svg?react";
import PDF from "./svg/PDF.svg?react";
import PNG from "./svg/PNG.svg?react";
import PPT from "./svg/PPT.svg?react";
import PS from "./svg/PS.svg?react";
import PSD from "./svg/PSD.svg?react";
import PUB from "./svg/PUB.svg?react";
import RAR from "./svg/RAR.svg?react";
import RAW from "./svg/RAW.svg?react";
import RSS from "./svg/RSS.svg?react";
import SVG from "./svg/SVG.svg?react";
import TIFF from "./svg/TIFF.svg?react";
import TXT from "./svg/TXT.svg?react";
import WAV from "./svg/WAV.svg?react";
import WMA from "./svg/WMA.svg?react";
import XML from "./svg/XML.svg?react";
import XSL from "./svg/XSL.svg?react";

const FILE_TYPE_ICON = {
	AI,
	AVI,
	BMP,
	CRD,
	CSV,
	DLL,
	DOC,
	DOCX,
	DWG,
	EPS,
	EXE,
	FLV,
	GIFF,
	HTML,
	ISO,
	JAVA,
	JPG,
	MDB,
	MID,
	MOV,
	MP3,
	MP4,
	MPEG,
	PDF,
	PNG,
	PPT,
	PS,
	PSD,
	PUB,
	RAR,
	RAW,
	RSS,
	SVG,
	TIFF,
	TXT,
	WAV,
	WMA,
	XML,
	XSL,
} as const;

export type FILE_TYPE_ICON_TYPE = keyof typeof FILE_TYPE_ICON;

export default FILE_TYPE_ICON;
