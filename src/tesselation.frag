#version 330

in vec3 v_Vertex;
in vec3 v_Normal;

const vec3 light_pos = vec3(0.0, 0.5, 0.0);

void main() {

	vec3 N = normalize(v_Normal);
	vec3 E = normalize(-v_Vertex);
	vec3 L = normalize(light_pos - v_Vertex);
	vec3 R = normalize(-reflect(L, N));
	
	float diffuse = max(dot(N, L), 0.0);
	float specular = pow(max(dot(R, E), 0.0), 32.0);

	vec3 color = vec3(1.0f, 1.0f, 1.0);// * diffuse + specular;
	
	gl_FragColor = vec4(color, 1.0);
}