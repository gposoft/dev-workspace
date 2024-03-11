
CREATE OR REPLACE FUNCTION products.update( 
	id       character varying(40), 
    dataset  jsonb 
)  
 RETURNS jsonb
LANGUAGE plpgsql  
AS  
$$  
    declare 
		register record;
		
		rcnews record;
		result record;
	BEGIN  
	
		 SELECT         
			value->>'code'            as code,
			value->>'name'            as name,
		   (value->>'price')::numeric as price,
			value->>'description'     as description,
		    value->>'sort'            as sort
		INTO register
		FROM jsonb_each(dataset);
	
	   WITH dsrows AS ( 
			UPDATE products.product
					SET 
		     		code        = COALESCE(register.code, code),
					name        = COALESCE(register.name, name),
					price       = COALESCE(register.price, price),
					description = COALESCE(register.description, description),
					sort        = COALESCE(register.sort, sort)
		    WHERE product_id = id 
		    RETURNING *)
				
	        
		    select ds.product_id as id, 
			       ds.code,  
				   ds.name,
				   ds.price,
				   ds.description, 
				   ds.sort
			INTO result
			FROM dsrows AS ds;
		
        return to_jsonb(result);
    END  
$$;  



CREATE OR REPLACE FUNCTION providers.product_update(
	id       character varying(40), 
    dataset jsonb
)
RETURNS jsonb
LANGUAGE plpgsql
AS
$$
DECLARE
    result jsonb;
BEGIN
    result := products.update(id, dataset);
    RETURN result;
END
$$;