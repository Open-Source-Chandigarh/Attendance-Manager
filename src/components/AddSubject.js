import React, { useState } from "react";

export default function AddSubject(props) {
	const [subj, setsubj] = useState("");
	const [atten, setatten] = useState();
	const [absnt, setabsnt] = useState();

	const handleInputChange = (e, status) => {
		const value = e.target.value;
		const cleanValue = value.replace(/[^0-9]/g, "");
		if (status === 0) {
			setatten(parseInt(cleanValue));
		} else {
			setabsnt(parseInt(cleanValue));
		}
	};

	const manageData = async (e) => {
		e.preventDefault();
		if (atten > absnt) {
			alert(
				"Attended classes couldnt be grater than total number of classes"
			);
		} else {
			let data = localStorage.getItem("attendenceData");
			data = await JSON.parse(data);
			let a = {};
			a[subj] = [atten, absnt];
			data.subject.push(a);
			props.changeData(data);
			data = JSON.stringify(data);
			localStorage.setItem("attendenceData", data);
			props.setnav("/");
		}
	};
	return (
		<div className="adduser">
			<form onSubmit={manageData} action="/">
				<h3>Add A New Subject</h3>
				<input
					type="text"
					value={subj}
					onChange={(e) => {
						setsubj(e.target.value);
					}}
					placeholder="Name Of Subject"
					required
				/>
				<input
					type="text"
					value={atten}
					onChange={(e) => {
						handleInputChange(e, 0);
					}}
					required
					placeholder="Attended Classes"
				/>
				<input
					type="text"
					value={absnt}
					onChange={(e) => {
						handleInputChange(e, 1);
					}}
					required
					placeholder="Number Of Total Classes"
				/>
				<button type="submit" className="btn">Submit</button>
			</form>
		</div>
	);
}
