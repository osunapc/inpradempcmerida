'use client'

import  react, { useState } from 'react'


import { Button } from "./Button"
import { Card } from "./Card"

type OrgUnit = {
  name: string
  children?: OrgUnit[]
}

const orgStructure: OrgUnit = {
  name: "Instituto de Protección Civil",
  children: [
    {
      name: "NIVEL DIRECTIVO",
      children: [
        {
          name: "Dirección General Estadal de Protección Civil Mérida",
          children: [
            { name: "Consejo Directivo" },
            { name: "Auditoría Interna" },
            { name: "Secretaría Ejecutiva" },
            { name: "Sub Dirección" },
            {
              name: "Coordinación de Gestión y Control Interno",
              children: [
                { name: "Coordinación de Despacho" },
                { name: "Atención al Ciudadano" }
              ]
            },
            { name: "Jefatura de Servicios" },
            { name: "Coordinación de Seguridad de Protección Civil" },
            { name: "Inspectoría General" }
          ]
        }
      ]
    },
    {
      name: "NIVEL DE SOPORTE",
      children: [
        {
          name: "Dirección de Gestión Administrativa",
          children: [
            { name: "Coordinación de Contabilidad" },
            { name: "Coordinación de Compras" },
            { name: "Coordinación de Servicios Generales" },
            { name: "Coordinación de Transporte" },
            { name: "Coordinación de Tecnología y Sistemas de Información" }
          ]
        },
        {
          name: "Dirección de Gestión de Talento Humano",
          children: [
            { name: "Coordinación de Administración de Personal" },
            { name: "Coordinación de Bienestar Social" },
            { name: "Coordinación Técnica" }
          ]
        },
        {
          name: "Dirección de Gestión para la Planificación y Presupuesto",
          children: [
            { name: "Coordinación de Presupuesto" },
            { name: "Coordinación de Estadística" }
          ]
        },
        { name: "Dirección de Consultoría Jurídica" },
        { name: "Comisión de Contrataciones" },
        { name: "Comisión Interna de Enajenación de Bienes Públicos" }
      ]
    },
    {
      name: "NIVEL SUSTANTIVO",
      children: [
        {
          name: "Dirección de Gestión Operacional",
          children: [
            { name: "Coordinación de Planificación Operacional" },
            { name: "Coordinación de Logística" },
            { name: "Coordinación de Telecomunicaciones" },
            { name: "Coordinación del Voluntariado" },
            { name: "Coordinación de Fuerza de Tarea Humanitaria Mariscal Sucre" },
            { name: "Coordinación de Ayuda Humanitaria" },
            { name: "Coordinación de Información y Divulgación" },
            { name: "Coordinación de Atención Prehospitalaria" },
            { name: "Coordinación de Centros y Subcentros de Coordinación de Protección Civil" }
          ]
        },
        {
          name: "Dirección de Gestión Integral de Riesgo",
          children: [
            { name: "Coordinación de Investigación de Riesgos" },
            { name: "Coordinación de Gestión Social Humanitaria" },
            { name: "Coordinación de Sala Situacional" }
          ]
        },
        {
          name: "Dirección de Gestión para la Capacitación y Formación Ciudadana",
          children: [
            { name: "Coordinación de Capacitación y Formación comunitaria" },
            { name: "Coordinación de Capacitación y Formación institucional" }
          ]
        }
      ]
    },
    {
      name: "NIVEL DESCONCENTRADO",
      children: [
        {
          name: "Centro de Coordinación de Protección Civil Metropolitano",
          children: [
            { name: "Sub Centro de Coordinación de Protección Civil Juan Rodríguez Suárez" },
            { name: "Sub Centro de Coordinación de Protección Civil Antonio Spinetti Dini" }
          ]
        },
        {
          name: "Centro de Coordinación de Protección Civil Páramo",
          children: [
            { name: "Sub Centro de Coordinación de Protección Civil Miranda" }
          ]
        },
        { name: "Centro de Coordinación de Protección Civil Pueblos del Sur" },
        { name: "Centro de Coordinación de Protección Civil Mocotíes" },
        {
          name: "Centro de Coordinación de Protección Civil Panamericana Sur",
          children: [
            { name: "Sub Centro de Coordinación de Protección Civil San Elías de Estanques" },
            { name: "Sub Centro de Coordinación de Protección Civil Andrés Bello" }
          ]
        },
        {
          name: "Centro de Coordinación de Protección Civil Sur del Lago",
          children: [
            { name: "Sub Centro de Coordinación de Protección Civil Palmento" },
            { name: "Sub Centro de Coordinación de Protección Civil Arapuey" },
            { name: "Sub Centro de Coordinación de Protección Civil Nueva Bolivia" }
          ]
        },
        { name: "Centro de Coordinación de Protección Civil El Vigía" }
      ]
    },
    {
      name: "NIVEL AUXILIAR",
      children: [
        { name: "GRUPOS VOLUNTARIOS ACREDITADOS" }
      ]
    }
  ]
}

function OrgUnitComponent({ unit, level = 0 }: { unit: OrgUnit; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(level < 1)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const getColorClass = (level: number) => {
    switch (level) {
      case 0: return 'bg-orange-500 border-orange-200'
      case 1: return 'bg-green-500 border-green-200'
      case 2: return 'bg-yellow-500 border-yellow-200'
      case 3: return 'bg-blue-500 border-blue-200'
      default: return 'bg-gray-500 border-gray-200'
    }
  }

  return (
		<div className={`flex flex-col items-center ${level > 0 ? "mt-4" : ""}`}>
			<Card
				className={`p-2 ${getColorClass(
					level
				)} w-full sm:w-64 text-center cursor-pointer`}
				onClick={toggleExpand}
			>
				<div className="flex items-center justify-center">
					{unit.children && unit.children.length > 0 && (
						<Button variant="ghost" size="sm" className="absolute left-2">
							{isExpanded ? (
								<span className="text-lg"></span> // Emoji de flecha hacia abajo
							) : (
								<span className="text-lg">▶</span> // Emoji de flecha hacia la derecha
							)}
						</Button>
					)}
					<span className={`font-semibold ${level === 0 ? "text-lg" : ""}`}>
						{unit.name}
					</span>
				</div>
			</Card>
			{isExpanded && unit.children && (
				<div
					className={`flex flex-wrap justify-center gap-4 mt-4 ${
						level === 0 ? "w-full" : ""
					}`}
				>
					{unit.children.map((child, index) => (
						<OrgUnitComponent key={index} unit={child} level={level + 1} />
					))}
				</div>
			)}
		</div>
	);
}

export default function Component() {
  return (
    <div className="container mx-auto p-4 overflow-x-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Organigrama del Instituto de Protección Civil</h1>
      <div className="inline-block min-w-full">
        <OrgUnitComponent unit={orgStructure} />
      </div>
    </div>
  )
}