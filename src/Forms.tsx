import useFetch from './useFetch';

export default function Forms() {
	type Form = {
		schema: string;
		created_at: string;
		created_by: string;
		custom_javascript: string;
		custom_javascript_triggering_fields: string[];
		description: string;
		dynamic_field_config: {
			[key: string]: {
				endpoint_id: string;
				output_key: string;
				payload_fields: {
					[key: string]: {
						component_key: string;
						is_metadata: boolean;
						output_key: string;
						type: string;
					};
				};
				selector_field: string;
			};
		};
		field_schema: {
			additionalProperties: {
				[key: string]: any | null;
			};
			properties: {
				[key: string]: any | null;
			};
			required: (string | null)[];
			type: string;
		};
		id: string;
		is_reusable: boolean;
		name: string;
		ui_schema: {
			elements: (any | null)[];
			type: string;
		};
		updated_at: string;
	};

    const action_blueprint_id = 'bp_456';
    const blueprint_version_id = 'bpv_123';
    const tenant_id = 123;

	const {
		data: forms,
		error,
		isLoading,
		isError,
	} = useFetch<Form[]>(
		`https://api.avantos-dev.io/api/v1/123/actions/blueprints/bp_456/bpv_123/graph`
	);

	if (isLoading) return <div>Loading forms...</div>;

	if (isError) return <div>Error: {error?.message}</div>;

	return (
		<>
        {forms}
			{/* {forms?.map((form: Form) => (
				<h1 key={form.id}>{form}</h1>
			))} */}
		</>
	);
}
